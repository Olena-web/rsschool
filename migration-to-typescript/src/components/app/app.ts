import AppController from '../controller/controller';
import AppView from '../view/appView';
// import APISource from '../view/news/news';
// import Article from '../view/news/news';

class App {
  controller: AppController;
  view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    (document.querySelector('.sources') as HTMLDivElement).addEventListener('click', (e: Event) =>
      this.controller.getNews(e, (data?: { articles: [] }) => {
        return this.view.drawNews(data);
      })
    ),
      this.controller.getSources((data?: { sources: [] }) => {
        return this.view.drawSources(data);
      });
  }
}
export default App;
