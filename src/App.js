import './App.css';
import User from './User/User';


function App({listUsers}) {

console.log(listUsers[0].born);

  return (
    // ( listUsers.map((el)=>(
    //   <User born={el.born} />
    // ))
    // )
  //   (
    listUsers.map((el) =>(
      <User
     id={el.id}
        namePerson={el.namePerson}
        surname={el.surname}
        phone={el.phone}
        
        />
    
    ))

  );
  
}

export default App;
