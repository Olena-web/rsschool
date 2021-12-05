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
    const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');
    if (newsItemTemp !== null) {
      news.forEach((item, idx) => {
        const newsClone = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;
        const newsItem = newsClone.querySelector<HTMLDivElement>('.news__item');
        if (idx % 2 && newsItem !== null) newsItem.classList.add('alt');
        const metaPhoto = newsClone.querySelector<HTMLDivElement>('.news__meta-photo');
        const author = newsClone.querySelector<HTMLDivElement>('.news__meta-author');
        const title = newsClone.querySelector<HTMLTitleElement>('.news__description-title');
        const source = newsClone.querySelector<HTMLDivElement>('.news__description-source');
        const content = newsClone.querySelector<HTMLDivElement>('.news__description-content');
        const anchor = newsClone.querySelector<HTMLAnchorElement>('.news__read-more a');
        const metaData = newsClone.querySelector<HTMLDivElement>('.news__meta-date');
        if (author !== null) author.textContent = item.author || item.source.name;
        if (title !== null) title.textContent = item.title;
        if (source !== null) source.textContent = item.source.name;
        if (content !== null) content.textContent = item.description;
        if (anchor !== null) anchor.setAttribute('href', item.url);
        if (metaData !== null) metaData.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
        if (metaPhoto !== null)
          metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

        fragment.append(newsClone);
      });
      const newsBlock = document.querySelector<HTMLDivElement>('.news');
      if (newsBlock !== null) {
        newsBlock.innerHTML = '';
        newsBlock.appendChild(fragment);
      }
    }
  }
}

export default News;
