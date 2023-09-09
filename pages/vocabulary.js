import sortButtons from '../components/buttons/sortButtons';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocabulary</h1>';
  renderToDOM('#view', domString);
};

const showVocab = (array) => {
  clearDom();

  sortButtons();

  const sortDropdown = `
  <select>
    <option>Alphabetically</option>
    <option>Ascending</option>
    <option>Descending</option>
  </select>`;

  renderToDOM('#view', sortDropdown);

  let domString = '';

  if (array.length < 1) {
    emptyVocab();
  } else {
    array.forEach((item) => {
      domString += `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
              <p class="card-text bold">Definition: ${item.definition}</p>
              <hr>
              <p class="card-text bold">Language: ${item.languageTech}</p>
              <p class="btn btn-info" id="update-vocab--${item.firebaseKey}">Update</p>
              <p class="btn btn-danger" id="delete-vocab--${item.firebaseKey}">Delete</p>
          </div>
        </div>`;
    });
  }
  renderToDOM('#view', domString);
};

export { showVocab, emptyVocab };
