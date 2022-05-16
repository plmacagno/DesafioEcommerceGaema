import './App.css';
import NavBar from './components/NavBar/NavBar'
import CardList from "./components/CardList/CardList";


let styleCustom ={
  color : "green",

}

function App() {
  return (
    <div className="App" style={styleCustom} >
        <NavBar />
        <CardList title={'Nuestros Productos'}/>
        
    </div>
  );
}

export default App;
