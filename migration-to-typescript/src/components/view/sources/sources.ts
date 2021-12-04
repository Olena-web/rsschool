import './sources.css';
type Article = {
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
export type Source = {
  id: string;
  name: string;
};
export interface APISource {
  status: string;
  totalResults: number;
  id: string;
  name: string;
  articles?: Article[];
  sources?: Source[];
}

class Sources {
  draw(data: APISource[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;
      if (sourceClone !== null) {
        (sourceClone.querySelector('.source__item-name') as HTMLSpanElement).textContent = item.name;
        (sourceClone.querySelector('.source__item') as HTMLDivElement).setAttribute('data-source-id', item.id);

        fragment.append(sourceClone);
      }
    });

    (document.querySelector('.sources') as HTMLDivElement).append(fragment);
  }
}

export default Sources;
