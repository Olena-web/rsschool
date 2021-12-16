import Control from '../common/control';

export class StartPage extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const header = new Control(this.node, 'header', 'header', '');
    const headerContainer = new Control(this.node, 'div', 'header__container', '');
    const navBar = new Control(this.node, 'nav', 'header__navbar', '');

    const linkStart = new Control(this.node, 'a', 'header__link start', '');
    const linkToToys = new Control(this.node, 'a', 'header__link active', 'Игрушки');
    const linkToTree = new Control(this.node, 'a', 'header__link', 'Ёлка');
    const headerSearch = new Control(
      this.node,
      'div',
      'header__search visible',
      `<input type="search" class="search" autocomplete="off">
    <div class="selected">
      <span>0</span>
    </div>`
    );
    document.body.prepend(header.node);
    header.node.append(headerContainer.node);
    headerContainer.node.append(navBar.node);
    navBar.node.append(linkStart.node);
    navBar.node.append(linkToToys.node);
    navBar.node.append(linkToTree.node);
    navBar.node.append(headerSearch.node);
  }
}
