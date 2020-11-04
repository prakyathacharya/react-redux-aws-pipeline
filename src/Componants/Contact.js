
import React from 'react';
import Mylist from './Mylist'
import {connect} from 'react-redux'

class Contact extends React.Component{
    // state = {
    //     mybudies:[
    //       {key:"01",name:"danush", age:"20",profession:"Artist"},
    //       {key:"02",name:"dhyan", age:"22",profession:"Composer"},
    //       {key:"03",name:"drushya", age:"25",profession:"Guitarist"}
    //     ]
    //   }
      
    render(){
        const dataCen = {mybudies : this.props.mybudies}
        //props.history.push('/about)  this will redirects to about page
        
       return(
        <div className ="text-center">
              <h4>Contact page</h4>
              <Mylist mybudies = {dataCen}/>
        </div>
        
      )
    }
}

const mapStateToProps =(state) => {
    return{
        mybudies : state.mybudies
    }
}
export default connect(mapStateToProps)(Contact);