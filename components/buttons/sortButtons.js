import renderToDOM from '../../utils/renderToDom';

const sortButtons = () => {
  const domString = `
  <div id="sort-buttons">
    <button id="css-btn">CSS</button>
    <button id="html-btn">HTML</button>
    <button id="js-btn">Javascript</button>
    <div>
      <select id="sort-drop">
        <option value="">Sort...</option>
        <option id="alphabetically" value="alphabetically">Alphabetically</option>
        <option id="ascending" value="ascending">Ascending</option>
        <option id="descending" value="descending">Descending</option>
      </select>
    </div>
  </div>`;

  renderToDOM('#btn-container', domString);
};

export default sortButtons;
