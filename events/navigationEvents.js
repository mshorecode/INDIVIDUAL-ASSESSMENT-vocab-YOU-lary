import { getVocabulary } from '../api/vocabularyData';
import { emptyVocab, showVocab } from '../pages/vocabulary';

const navigationEvents = () => {
  document.querySelector('#all-vocabulary').addEventListener('click', () => {
    getVocabulary().then((array) => {
      if (array.length) {
        showVocab(array);
      } else {
        emptyVocab();
      }
    });
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
