let countEnergy = 0;
let countCard = 0;

const CURRENT_ENERGY = document.getElementById('currentEnergy');
const CURRENT_CARD = document.getElementById('currentCard');


function newturn() {
	
	CURRENT_ENERGY.innerHTML = countEnergy = countEnergy + 2;
	CURRENT_CARD.innerHTML = countCard= countCard + 3;
}