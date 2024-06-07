import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    // eslint-disable-next-line no-underscore-dangle
    this._button = button;
    // eslint-disable-next-line no-underscore-dangle
    this._drawer = drawer;
    // eslint-disable-next-line no-underscore-dangle
    this._content = content;

    // eslint-disable-next-line no-underscore-dangle
    this._initialAppShell();
  }

  // eslint-disable-next-line no-underscore-dangle
  _initialAppShell() {
    DrawerInitiator.init({
      // eslint-disable-next-line no-underscore-dangle
      button: this._button,
      // eslint-disable-next-line no-underscore-dangle
      drawer: this._drawer,
      // eslint-disable-next-line no-underscore-dangle
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    // eslint-disable-next-line no-underscore-dangle
    this._content.innerHTML = await page.render();
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#content').focus();
    });
    await page.afterRender();
  }
}

export default App;
