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
        const itemName = sourceClone.querySelector('.source__item-name') as HTMLSpanElement;
        const itemSource = sourceClone.querySelector('.source__item') as HTMLDivElement;
        itemName.textContent = item.name;
        itemSource.setAttribute('data-source-id', item.id);
        fragment.append(sourceClone);
      }
    });
    const sources = document.querySelector('.sources') as HTMLDivElement;
    if (sources.textContent == '') {
      sources.append(fragment);
    }
  }
}

export default Sources;
