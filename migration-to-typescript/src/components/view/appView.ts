import News from './news/news';
import Sources from './sources/sources';
export interface AppView {
  news: News;
  sources: Sources;
}

export class AppView {
  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: { articles: [] }) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: { sources: [] }) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
