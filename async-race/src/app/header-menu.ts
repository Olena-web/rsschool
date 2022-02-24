const html = `
<header>
	<div class="page-buttons">
		<button class="garage-page__button">to garage</button>
		<button class="winners-page__button">to winners</button>
	</div>
</header>
`;

export const root = document.createElement('div');
root.innerHTML = html;
document.body.appendChild(root);

export const garagePage = document.createElement('div');
garagePage.innerHTML = `
<div class= "garage-header">
	<div class="create-cars">
		<input type="text" value= "" id="car-name">
		<input type="color" id="colorWell">
		<label for ="colorWell"></label>
		<button class="create-cars__button">create</button>
	</div>
	<div class="update-cars">
		<input type="text" id="car-new-name">
		<input type="color" id="color-new-Well">
		<label for = "color-new-Well"></label>
		<button class="update-cars__button">update</button>
	</div>
	<div class="game-buttons">
		<button class="race">race</button>
		<button class="reset">reset</button>
		<button class="generate">generate cars</button>
	</div>
</div>
<div class="titles">
	<h2>Garage (<span class = "cars-number"></span>)</h2>
	<h4 class = "page-number" >Page # </h4>
</div>	
<div class="road">
</div>
<div class="pagination-buttons">
	<button id="prev">prev</button>
	<button id="next">next</button>
</div>
`;
root.append(garagePage);
