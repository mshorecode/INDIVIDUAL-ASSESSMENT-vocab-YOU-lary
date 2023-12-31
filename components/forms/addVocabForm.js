import { getSingleVocabulary } from '../../api/vocabularyData';
import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addVocabForm = (uid, obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabularyTitle" placeholder="Enter Title" value="${obj.title || ''}" required>
      </div>
      <br>
      <div class="form-group">
        <label for="definition">Definition:</label>
        <input type="text" class="form-control" placeholder="Definition" id="definition" style="height: 100px">${obj.description || ''}</input>
      </div>
      <br>
      <div class="form-group">
        <label for="languageTech">Language:</label>
        <input type="text" class="form-control" id="language-tech" aria-describedby="vocabularyLanguage" placeholder="Language/Tech" value="${obj.languageTech || ''}" required>
      </div>
      <br>
      <input type="checkbox" id="checkbox1" name="public" value="Public">
      <label for="public">Public</label>&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="checkbox" id="checkbox2" name="private" value="Private">
      <label for="private">Private</label>
      <br>
      <br>
      <button type="submit" class="btn btn-primary">Submit
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  getSingleVocabulary(`${obj.firebaseKey || ''}`, uid);
};

export default addVocabForm;
