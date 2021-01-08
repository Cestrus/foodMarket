import ViewCustomer from './view-customer.js';
import ModelCustomer from './model-customer.js';


export class ControllerCustomer{
  constructor( api ){
    this.model = new ModelCustomer();
    this.view = new ViewCustomer();

  }



}


// // зарузка данных из Firebase
// loadFromDatabase(){
//   return (this.db.collection("shooters")
//     .get()
//     .then(query => {
//       query.forEach(shooter => {
//         if(shooter.exists){
//           this.records.push(shooter.data());
//         }
//       });
//       return this.records;
//     })
//   )
// }
// //
// loadData(){
//   return this.loadFromDatabase().then(records => records.sort((a, b) => a.rating > b.rating ? -1 : 1));
// }
// // сохранение результата игры в Firebase
// saveData(){
//   this.db.collection("shooters").add(this.gamer);
//   this.records.push(Object.assign({}, this.gamer));
//   this.records.sort((a, b) => a.rating > b.rating ? -1 : 1);
// }