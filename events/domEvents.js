import {
  deleteVocabulary, filterVocabularyByCSS, filterVocabularyByHTML, filterVocabularyByJavascript, getSingleVocabulary, getVocabulary
} from '../api/vocabularyData';
import addVocabForm from '../components/forms/addVocabForm';
import { emptyVocab, showVocab } from '../pages/vocabulary';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab')) {
      if (window.confirm('Remove Flashcard?')) {   //eslint-disable-line
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocabulary(firebaseKey).then(() => {
          getVocabulary(user.uid).then((array) => {
            if (array.length) {
              showVocab(array);
            } else {
              emptyVocab();
            }
          });
        });
      }
    }

    if (e.target.id.includes('update-vocab')) {
      const [, firebasekey] = e.target.id.split('--');
      getSingleVocabulary(firebasekey).then((vocab) => addVocabForm(user.uid, vocab));
    }

    if (e.target.id.includes('css-btn')) {
      console.warn('YOU CLICKED CSS', e.target.id);
      filterVocabularyByCSS().then((array) => {
        if (array.length) {
          showVocab(array);
        } else {
          emptyVocab();
        }
      });
    }

    if (e.target.id.includes('html-btn')) {
      console.warn('YOU CLICKED HTML', e.target.id);
      filterVocabularyByHTML().then((array) => {
        if (array.length) {
          showVocab(array);
        } else {
          emptyVocab();
        }
      });
    }

    if (e.target.id.includes('js-btn')) {
      console.warn('YOU CLICKED JS', e.target.id);
      filterVocabularyByJavascript().then((array) => {
        if (array.length) {
          showVocab(array);
        } else {
          emptyVocab();
        }
      });
    }
  });
};

export default domEvents;
