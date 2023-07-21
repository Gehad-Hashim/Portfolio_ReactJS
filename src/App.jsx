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
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom' ;
import Skills from "./pages/skills"
import skill from "./pages/oneSkill"
import Blogs from "./pages/Blogs"
import SwiperComp from './components/swiper/swiper'
import ClassComponent from './components/class/ClassComponent'
import { useSelector ,useDispatch} from 'react-redux';
import { getList } from "./Store/Actions/listAction";
import { useState,useEffect } from "react";

function App() {
  const language = useSelector((state) => state.langRed.lang);
  const theme = useSelector((state) => state.themeRed.theme);
  const dispatch = useDispatch();
  useEffect(() => {
          dispatch(getList())
  }, [])
  return (
    <div className={theme =="dark"?'bg-dark text-light':'bg-light text-dark'}  dir={language =="en"?'ltr':'rtl'}>
      <BrowserRouter>
      <Header/>
            <Switch>
                <Route path='/' exact component={Main} />
                <Route  path={"/counter"} exact component={CountWrapper}/>
                <Route  path={"/add"} exact component={FormComponent}/>
                <Route  path={"/submit"} exact component={MyCv}/>
                <Route  path={"/about"} exact component={About}/>
                <Route  path={"/skills"} exact component={Skills}/>
                <Route  path={"/skill/:id"} exact component={skill}/>
                <Route  path={"/blogs"} exact component={Blogs}/>
                <Route  path={"/class"} exact component={ClassComponent}/>
                <Route  path={"/memory"} exact component={SwiperComp}/>
                <Route  path='*' exact component={NotFound}/>
            </Switch>
       </BrowserRouter>

{/* <SwiperComp /> */}
      {/* <MyCv /> */}
      
      <Footer/>


    </div>
  );
}

export default App;
