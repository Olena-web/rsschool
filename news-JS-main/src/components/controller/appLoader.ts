import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super({
            baseLink: 'https://newsapi.org/v2/',
            options: {
                apiKey: 'cf49ab624cac4ede9eecf9c7e9efa65a',
            },
        });
    }
}

export default AppLoader;
