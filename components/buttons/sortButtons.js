import renderToDOM from '../../utils/renderToDom';

const sortButtons = () => {
  const domString = `
  <div id="sort-buttons">
    <button>CSS</button>
    <button>HTML</button>
    <button>Javascript</button>
    <button>Webpack</button>
  </div>`;

  renderToDOM('#btn-container', domString);
};

export default sortButtons;
