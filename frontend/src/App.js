import Header from './components/Header';
import ListEmployee from './components/ListEmployee';
import {BrowserRouter as Router} from 'react-router-dom';



function App(){
    return (
        <Router className="App">
                <Header/>
                <ListEmployee/>
        </Router>
    );
}
export default App;