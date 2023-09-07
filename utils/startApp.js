// import { getVocabulary } from '../api/vocabularyData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import navigationEvents from '../events/navigationEvents';
// import { showVocab } from '../pages/vocabulary';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
  navigationEvents();
};

export default startApp;
