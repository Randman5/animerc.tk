import './App.sass';
import 'normalize.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Switch, Route} from 'react-router-dom'
import Home from "./pages/Home/Home";
import SearchBar from "./components/SearchBar/SearchBar";
import Top from "./components/Top/Top";
const App = () => {
  return (
    <div className={'wrapper'}>
        <Top/>
        <Header/>
        <SearchBar/>
        <Switch>
            <Route render={()=> <Home/>} exact path={'/'}/>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
