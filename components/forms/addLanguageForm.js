import { getSingleLanguage } from '../../api/languageData';
import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addLanguageForm = (uid, obj = {}) => {
  clearDom();
  const domString = `
  <form id="submit-language" class="mb-4">
    <div class="form-group">
      <label for="languageTech">Language:</label>
      <input type="text" class="form-control" id="language-tech" aria-describedby="vocabularyLanguage" placeholder="Language/Tech" value="${obj.languageTech || ''}" required>
    </div>
    <br>
    <button type="submit" class="btn btn-primary">Submit
    </button>
  </form>`;

  renderToDOM('#form-container', domString);
  getSingleLanguage(`${obj.firebaseKey || ''}`, uid);
};

export default addLanguageForm;
