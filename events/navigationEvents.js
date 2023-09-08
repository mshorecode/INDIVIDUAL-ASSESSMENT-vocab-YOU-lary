import { getVocabulary } from '../api/vocabularyData';
import addVocabForm from '../components/forms/addVocabForm';
import { emptyVocab, showVocab } from '../pages/vocabulary';

const navigationEvents = (user) => {
  document.querySelector('#all-vocabulary').addEventListener('click', () => {
    getVocabulary(user.uid).then((array) => {
      if (array.length) {
        showVocab(array);
      } else {
        emptyVocab();
      }
    });
  });

  document.querySelector('#create-entry').addEventListener('click', () => {
    addVocabForm();
  });

  // TODO: Create FILTER API Call
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchVocab = document.querySelector('#search').value.toLowerCase();
    console.warn(searchVocab); // TODO: Console warn successful but not clearing search box
    if (e.keycode === 13) {
      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
