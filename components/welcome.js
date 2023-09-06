import renderToDOM from '../utils/renderToDom';

const welcome = () => {
  const domString = `
  <h1 class="welcome-message">Welcome to Vocab-YOU-lary!</h1>
  `;

  renderToDOM('#login-form-container', domString);
};

export default welcome;
