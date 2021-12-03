import './sources.css';
 export interface Article {
    author: string,
    title: string,
    description: string,
    url: string|unknown,
    urlToImage: string| unknown,
    publishedAt: string,
    content: string
    }

export interface APISource {
    id: string;
    name: string;
    status:string,
    totalResults:number,
    articles?: [Article],
    
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
