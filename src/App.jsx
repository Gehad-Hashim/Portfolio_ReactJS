import './App.css';
import NotFound from './components/notfoundComponent/notfound';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Main from './components/mainComponent/main';
import About from './components/about';
import MyCv from './components/myCV';
import FormComponent from './components/formComponent';
import CountWrapper from './components/countWrapper';
import { Button } from 'react-bootstrap';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom' ;


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route  path='/counter' element={<CountWrapper/>}/>
                <Route  path='*' element={<NotFound/>}/>
            </Routes>
       </BrowserRouter>


      {/* <MyCv /> */}
      {/* <FormComponent /> */}
      <Footer/>


    </div>
  );
}

export default App;
