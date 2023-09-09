import { getLanguage } from '../api/languageData';
import { getVocabulary, searchVocabulary } from '../api/vocabularyData';
import addLanguageForm from '../components/forms/addLanguageForm';
import addVocabForm from '../components/forms/addVocabForm';
import { emptyLanguage, showLanguage } from '../pages/language';
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

  document.querySelector('#all-language').addEventListener('click', () => {
    getLanguage(user.uid).then((array) => {
      if (array.length) {
        showLanguage(array);
      } else {
        emptyLanguage();
      }
    });
  });

  document.querySelector('#create-language').addEventListener('click', () => {
    addLanguageForm();
  });

  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchVocab = document.querySelector('#search').value.toLowerCase();
    console.warn(searchVocab);
    if (e.keyCode === 13) {
      searchVocabulary(searchVocab, user.uid)
        .then((search) => {
          if (search.length) {
            showVocab(search);
          } else {
            emptyVocab();
          }
        });
      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
