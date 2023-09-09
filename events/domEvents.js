import {
  deleteVocabulary, filterVocabularyByCSS, filterVocabularyByHTML, filterVocabularyByJavascript, getSingleVocabulary, getVocabulary
} from '../api/vocabularyData';
import addVocabForm from '../components/forms/addVocabForm';
import { emptyVocab, showVocab } from '../pages/vocabulary';
import { sortAlphabetically, sortAscending, sortDescending } from '../utils/sortDropdown';

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

    if (e.target.id.includes('alphabetically')) {
      getVocabulary(user.uid).then((array) => {
        if (array.length) {
          showVocab(array.sort(sortAlphabetically));
        } else {
          emptyVocab();
        }
      });
    }

    if (e.target.id.includes('ascending')) {
      getVocabulary(user.uid).then((array) => {
        if (array.length) {
          showVocab(array.sort(sortAscending));
        } else {
          emptyVocab();
        }
      });
    }

    if (e.target.id.includes('descending')) {
      getVocabulary(user.uid).then((array) => {
        if (array.length) {
          showVocab(array.sort(sortDescending));
        } else {
          emptyVocab();
        }
      });
    }

    if (e.target.id.includes('css-btn')) {
      filterVocabularyByCSS().then((array) => {
        if (array.length) {
          showVocab(array);
        } else {
          emptyVocab();
        }
      });
    }

    if (e.target.id.includes('html-btn')) {
      filterVocabularyByHTML().then((array) => {
        if (array.length) {
          showVocab(array);
        } else {
          emptyVocab();
        }
      });
    }

    if (e.target.id.includes('js-btn')) {
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
