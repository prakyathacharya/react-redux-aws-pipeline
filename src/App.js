import React from 'react';
import About from './Componants/About';
import Home from './Componants/Home';
import Contact from './Componants/Contact';
import Navbar from './Componants/Navbar';

import { BrowserRouter , Route} from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
          <BrowserRouter>
          <div>
            <Navbar />
            <Route path ='/' component = {Home} />
            <Route path ='/about' component = {About} />
            <Route path ='/contact' component = {Contact} />
          </div>
          </BrowserRouter>
        )
    }
}
export default App;
