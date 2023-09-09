import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyLanguage = () => {
  const domString = '<h1>No Languages Saved</h1>';
  renderToDOM('#view', domString);
};

const showLanguage = (array) => {
  clearDom();

  let domString = '';

  if (array.length < 1) {
    emptyLanguage();
  } else {
    array.forEach((item) => {
      domString += `
      <div class="card">
          <div class="card-body">
            <h5 class="card-title">${item.languageTech}</h5>
              <p class="btn btn-danger" id="delete-vocab--${item.firebaseKey}">Delete</p>
          </div>
        </div>`;
    });
  }
  renderToDOM('#view', domString);
};

export { emptyLanguage, showLanguage };
