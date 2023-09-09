import { createLanguage, getLanguage, updateLanguage } from '../api/languageData';
import { createVocabulary, getVocabulary, updateVocabulary } from '../api/vocabularyData';
import { showLanguage } from '../pages/language';
import { showVocab } from '../pages/vocabulary';
import selectedCheckbox from '../utils/checkbox';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    const dateTime = Date(e);
    const convertedDateTime = new Date(dateTime).toISOString().slice(0, 19).replace('T', ' ');
    if (e.target.id.includes('submit-vocab')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        languageTech: document.querySelector('#language-tech').value,
        timeSubmitted: convertedDateTime,
        uid: user.uid,
      };

      createVocabulary(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocabulary(patchPayload).then(() => {
          getVocabulary(user.uid).then(showVocab);
        });
      });
    }
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        languageTech: document.querySelector('#language-tech').value,
        timeSubmitted: convertedDateTime,
        uid: user.uid,
        firebaseKey,
      };

      updateVocabulary(payload).then(() => {
        getVocabulary(user.uid).then(showVocab);
      });
    }
    if (e.target.id.includes('checkbox')) {
      console.warn('This checkbox was selected...', e.target.id);
      selectedCheckbox(this.id);
    }
    if (e.target.id.includes('submit-language')) {
      const payload = {
        languageTech: document.querySelector('#language-tech').value,
        uid: user.uid,
      };

      createLanguage(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateLanguage(patchPayload).then(() => {
          getLanguage(user.uid).then(showLanguage);
        });
      });
    }
  });
};

export default formEvents;
