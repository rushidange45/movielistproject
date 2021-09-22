import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import Data from  './Components/Data';


function App() {
  return (

   <>
    { Data.map((val)=>{
    return (
        
      <Card 
      title ={val.title} 
      collection= {val.collection} 
      Distributor = {val.Distributor} 
      imgsrc ={val.imgsrc} />
    );
  })
    }
   </>
      
  
  );
 
}

export default App;
