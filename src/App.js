import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemList from "./components/ItemList/ItemList";



let styleCustom ={
  color : "green",

}

function App() {
  
  return (
    <div className="App" style={styleCustom} >
        <NavBar />
        <ItemList title={'Nuestros Productos'}/>
             
              
     </div>
  );
}

export default App;
