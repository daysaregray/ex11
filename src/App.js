import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
    return (
        <div className="App">
            <Header/>

            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </div>
    );
}

export default App;