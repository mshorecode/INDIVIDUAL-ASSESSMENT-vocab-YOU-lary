import { getVocabulary } from '../api/vocabularyData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { emptyVocab, showVocab } from '../pages/vocabulary';

const startApp = (user) => {
  domBuilder(user);
  navBar(user);
  getVocabulary(user.uid).then((array) => {
    if (array.length) {
      showVocab(array);
    } else {
      emptyVocab();
    }
  });
  logoutButton();
  navigationEvents(user);
  formEvents(user);
  domEvents(user);
};

export default startApp;
