import { createVocabulary, getVocabulary, updateVocabulary } from '../api/vocabularyData';
import { showVocab } from '../pages/vocabulary';

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
  });
};

export default formEvents;
