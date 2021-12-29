import Control from '../common/control';
import { TOYS, TREE } from '../constants/startPage.constants';
export class Header extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const header = new Control(this.node, 'header', 'header', '');
    const headerContainer = new Control(this.node, 'div', 'header__container', '');
    const navBar = new Control(this.node, 'nav', 'header__navbar', '');

    //const linkStart = new Control(this.node, 'a', 'header__link start', '');
    const linkToToys = new Control(this.node, 'a', 'header__link active', TOYS);
    const linkToTree = new Control(this.node, 'a', 'header__link', TREE);
    const headerSearch = new Control(
      this.node,
      'div',
      'header__search visible',
      `<input type="search" class="search" autocomplete="off">
      <div class="selected">
        <span>0</span>
      </div>`
    );
    header.node.append(headerContainer.node);
    headerContainer.node.append(navBar.node);
    //navBar.node.append(linkStart.node);
    navBar.node.append(linkToToys.node);
    navBar.node.append(linkToTree.node);
    navBar.node.append(headerSearch.node);
    return header;
  }
}

function createHeader(): void {
  const body = document.querySelector<HTMLElement>('app');
  if (body) {
    const header = new Header(body);
    body.append(header.node);
  }
}
createHeader();
window.addEventListener('load', createHeader);

const start = document.querySelector<HTMLLinkElement>('.start');
const startPage = document.getElementById('start');
const toysPage = document.getElementById('toys');
const treePage = document.getElementById('tree');
const toys = document.querySelector<HTMLLinkElement>('.toys');
export const tree = document.querySelector<HTMLLinkElement>('.tree');
const headerSearch = document.querySelector<HTMLDivElement>('.header__search');
const toGame = document.querySelector<HTMLButtonElement>('.to-game');

start?.addEventListener('click', (): void => {
  toys?.removeEventListener('click', (): void => {
    toToysPage;
  });
  tree?.removeEventListener('click', (): void => {
    toTreePage;
  });

  toStartPage();
});

toys?.addEventListener('click', (): void => {
  tree?.removeEventListener('click', (): void => {
    toTreePage;
  });
  start?.removeEventListener('click', (): void => {
    toTreePage;
  });

  toToysPage();
});

tree?.addEventListener('click', (): void => {
  start?.removeEventListener('click', (): void => {
    toToysPage;
  });
  tree?.removeEventListener('click', (): void => {
    toTreePage;
  });

  toTreePage();
});

toGame?.addEventListener('click', (): void => {
  toToysPage();
});

function toStartPage(): void {
  startPage?.classList.remove('hide');
  startPage?.classList.add('home');
  toysPage?.classList.add('hide');
  if (startPage?.classList.contains('home')) {
    treePage?.classList.toggle('hide');
  }
  treePage?.classList.add('hide');
  headerSearch?.classList.remove('visible');
  start?.classList.add('on');
  toys?.classList.remove('on');
  tree?.classList.remove('on');
}

function toToysPage(): void {
  startPage?.classList.add('hide');
  treePage?.classList.add('hide');
  toysPage?.classList.remove('hide');
  headerSearch?.classList.add('visible');
  start?.classList.remove('on');
  tree?.classList.remove('on');
  toys?.classList.add('on');
}

function toTreePage(): void {
  startPage?.classList.add('hide');
  toysPage?.classList.add('hide');
  treePage?.classList.remove('hide');
  headerSearch?.classList.add('visible');
  start?.classList.remove('on');
  toys?.classList.remove('on');
  tree?.classList.add('on');
}
