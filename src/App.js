import React from 'react';
import Home from './Componants/Home';
 import Report from './Componants/Report';
import Navbar from './Componants/Navbar';
import AudioPlayer from './Componants/AudioPlayer';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/images/heringLogo.png';



import { BrowserRouter , Route,Redirect} from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isUserAuthenticated: true,
      userName:"",
      email:""
    }
  }
  session = (data) => {
console.log(data)
  }
    render(){
        return(
          <BrowserRouter>
       <header>
        <div className=" align-items-center px-md-4 bg-white border-bottom shadow-sm">

        <img _ngcontent-ijx-c16="" src={logo} alt="Logo" /></div>
             
      </header>
          <div>
            <Route exact path ='/' setSession = {this.session} component = {Home}/>
            <Route exact path ='/report' component = {Report} />
            <Route exact path ='/survey' component = {AudioPlayer} />
          </div>
          {/* <footer>

          </footer> */}
          </BrowserRouter>
        )
    }
}
const mapStateToProps =(state) => {
  return{
      mybudies : state.mybudies
  }
}
export default connect(mapStateToProps)(App);