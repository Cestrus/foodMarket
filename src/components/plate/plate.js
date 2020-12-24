import Card from '../card/card.js';


const Plate = ( props ) => {
	const renderCard = () => {
		return Card(props);
	}

	return `
		<main class="plate">
      <div class="plate-container">
      ${ renderCard() }
      </div>
    </main>
	`
}

export default Plate;
