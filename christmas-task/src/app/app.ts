import Control from '../common/control';
import { StartPage } from './startPage';

export class Application extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    //preloader
    const preloader = new Control(this.node, 'div', '', 'loading...');
  }
}
// const startPage = new StartPage(this.node);
// startPage.onPageSelect = (pageName)=>{
//     startPage.destroy();
//     this.categoryCycle(pageName);
//   }
