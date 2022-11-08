// import 'jquery'
// import $ from 'jquery';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <div className='content-wrapper'>
      <Nav />
      <Main />  
    </div>
  );
}

export default App;
