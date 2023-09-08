import client from '../utils/client';

const endpoint = client.databaseURL;

const getVocabulary = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createVocabulary = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateVocabulary = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteVocabulary = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleVocabulary = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// FILTER CALLS
const filterVocabularyByJavascript = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json?orderBy="languageTech"&equalTo="Javascript"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const filterVocabularyByCSS = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json?orderBy="languageTech"&equalTo="CSS"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const filterVocabularyByHTML = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json?orderBy="languageTech"&equalTo="HTML"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// TODO: STRETCH...SEARCH VOCABULARY ENTRIES
const searchVocabulary = (input, uid) => new Promise((resolve, reject) => {
  getVocabulary(uid).then((array) => {
    const results = array.filter((vocab) => (
      vocab.title.toLowerCase().includes(input)
      || vocab.definition.toLowerCase().includes(input)
    ));
    resolve(results);
  }).catch(reject);
});

export {
  getVocabulary,
  createVocabulary,
  updateVocabulary,
  getSingleVocabulary,
  deleteVocabulary,
  filterVocabularyByJavascript,
  filterVocabularyByCSS,
  filterVocabularyByHTML,
  searchVocabulary,
};
