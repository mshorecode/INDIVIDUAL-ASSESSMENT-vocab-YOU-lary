import { deleteVocabulary, getSingleVocabulary, getVocabulary } from '../api/vocabularyData';
import addVocabForm from '../components/forms/addVocabForm';
import { emptyVocab, showVocab } from '../pages/vocabulary';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab')) {
      if (window.confirm('Remove Flashcard?')) {
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
  });
};

export default domEvents;
