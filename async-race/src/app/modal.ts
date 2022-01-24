import { garagePage } from './header-menu';

export const modal = document.createElement('div');
garagePage.append(modal);
modal.classList.add('modal');
modal.innerHTML = `

	<div class = modal-content>
		<span class="close-button">&times;</span>
		<p class="message"></p>
	</div>

`;
const closeButton = document.querySelector<HTMLButtonElement>('.close-button');

export function toggleModal(): void {
  modal.classList.add('show-modal');
}
export function removeModal(): void {
  modal.classList.remove('show-modal');
}

closeButton?.addEventListener('click', removeModal);
