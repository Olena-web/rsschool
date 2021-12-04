import './news.css';
export type APINews = {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: {
    name: string;
    id: string;
  };
};
class News {
  draw(data: APINews[]): void {
    const news =
      data.length >= 10
        ? data.filter((_item: object, idx: number) => {
            return idx < 10;
          })
        : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    news.forEach((item, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;

      if (idx % 2) {
        const newsItem = newsClone.querySelector('.news__item') as HTMLDivElement;
        newsItem.classList.add('alt');
        const metaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLDivElement;
        const author = newsClone.querySelector('.news__meta-author') as HTMLDivElement;
        const news = document.querySelector('.news') as HTMLDivElement;
        const title = newsClone.querySelector('.news__description-title') as HTMLTitleElement;
        const source = newsClone.querySelector('.news__description-source') as HTMLDivElement;
        const content = newsClone.querySelector('.news__description-content') as HTMLDivElement;
        const anchor = newsClone.querySelector('.news__read-more a') as HTMLAnchorElement;
        const metaData = newsClone.querySelector('.news__meta-date') as HTMLDivElement;

        author.textContent = item.author || item.source.name;
        news.innerHTML = '';
        title.textContent = item.title;
        source.textContent = item.source.name;
        content.textContent = item.description;
        anchor.setAttribute('href', item.url);
        news.appendChild(fragment);
        metaData.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
        metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

        fragment.append(newsClone);
      }
    });
  }
}

export default News;
