import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabularyTitle" placeholder="Enter Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition:</label>
        <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="language_tech">Language:</label>
        <input type="text" class="form-control" id="language-tech" aria-describedby="vocabularyLanguage" placeholder="Language/Tech" value="${obj.language_tech || ''}" required>
      </div>
      <br>
      <button type="submit" class="btn btn-primary">Submit
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
