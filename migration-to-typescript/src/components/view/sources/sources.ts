import './sources.css';
export type Article = {
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
    const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
    if (sourceItemTemp !== null) {
      data.forEach((item) => {
        const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;
        if (sourceClone !== null) {
          const itemName = sourceClone.querySelector<HTMLSpanElement>('.source__item-name');
          const itemSource = sourceClone.querySelector<HTMLDivElement>('.source__item');
          if (itemName !== null) {
            itemName.textContent = item.name;
          }
          if (itemSource !== null) {
            itemSource.setAttribute('data-source-id', item.id);
          }
          fragment.append(sourceClone);
        }
      });
    }
    const sources = document.querySelector<HTMLDivElement>('.sources');
    if (sources !== null && sources.textContent == '') {
      sources.append(fragment);
    }
  }
}

export default Sources;
