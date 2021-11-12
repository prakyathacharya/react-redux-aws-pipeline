
import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';

class Navbar extends React.Component{
 
    render(){
       return(

            //     <ul>
            //         <li><a href='/'>Home</a></li>
            //         <li><a href='/about'>About</a></li>
            //         <li><a href='/contact'>Contact</a></li>
            //     </ul> 


            //     <ul>
            //         {/* this will prevent default action e.g preventDefault 
            //         <li><Link to='/'>Home</Link></li>
            //         <li><Link to='/about'>About</Link></li>
            //         <li><Link to='/contact'>Contact</Link></li>
            //     </ul>


            //  Active class is assigned to active link using NavLink 
             
        <nav className="navbar navbar-default">
            <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">React- redux basic example</a>
            </div>
            <ul className="nav navbar-nav">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
            </div>
        </nav>
      )
    }
}
export default withRouter(Navbar);

//withRouter make this Navbar higher order without higher order push function will not be available