import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: 'cf49ab624cac4ede9eecf9c7e9efa65a', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
