import renderToDOM from '../../utils/renderToDom';

const sortButtons = () => {
  const domString = `
  <div id="sort-buttons">
    <button id="css-btn">CSS</button>
    <button id="html-btn">HTML</button>
    <button id="js-btn">Javascript</button>  
  </div>`;

  renderToDOM('#btn-container', domString);
};

export default sortButtons;
