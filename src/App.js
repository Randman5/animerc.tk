import './App.sass';
import 'normalize.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Header";
import {Switch, Route} from 'react-router-dom'
import Home from "./pages/Home/Home";
import Test from "./pages/Test";

const App = () => {
  return (
    <div className={'wrapper'}>
        <Header/>
        <Switch>
            <Route render={()=> <Home/>} exact path={'/'}/>
            <Route render={()=> <Test/>} path ={'/test'} />
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
