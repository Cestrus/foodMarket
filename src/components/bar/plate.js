import Card from '../card/card.js';


const Plate = (props) => {  
  const products = props;

  return `
		<div class="plate">
      ${ products.map(product => Card(product)).join('')}
    </div>
	`
}

export default Plate;
