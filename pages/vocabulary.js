import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocabulary</h1>';
  renderToDOM('#view', domString);
};

const showVocab = (array) => {
  clearDom();

  let domString = '';

  if (array.length < 1) {
    emptyVocab();
  } else {
    array.forEach((item) => {
      domString += `
        <div class="card">
          <div class="card-body" style="height: 180px;">
            <h5 class="card-title">${item.title}</h5>
              <p class="card-text bold">Description: ${item.definition}</p>
              <hr>
              <p class="card-text bold">Language: ${item.language_tech}</p>
              <p class="card-text bold">Creation Date: ${item.timeSubmitted}</p>
          </div>
        </div>`;
    });
  }
  renderToDOM('#view', domString);
};

export { showVocab, emptyVocab };
