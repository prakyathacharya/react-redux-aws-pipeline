
import React from 'react';
import {connect} from 'react-redux'

class About extends React.Component{
 handleClick = ()=>{
     this.props.addObject();
     this.props.history.push('/contact')
 }
    render(){
        // const dataCenter = this.props
       return(
        <div className ="text-center">
            <h4>This is About page, Click on "Add one object" then goto contact page and see updated data from redux store</h4>
            <button onClick ={this.handleClick}>Add one object</button>
        </div>
      )
    }
}

const mapStateToProps =(state) => {
    return{
        mybudies : state.mybudies
    }
}
const mapDispatchToProps = (dispatch) => {
    const oneEntry = {key:"04",name:"Prakyath", age:"30",profession:"Software Engineer",mobile :"9101213"};
    return{
        addObject:()=> {dispatch({type:"ADD_OBJECT", data:oneEntry})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(About);