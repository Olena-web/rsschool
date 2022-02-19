import Loader from './loader';
import { LINK, API_KEY } from './constants';

class AppLoader extends Loader {
  constructor() {
    super(LINK, {
      apiKey: API_KEY, // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
