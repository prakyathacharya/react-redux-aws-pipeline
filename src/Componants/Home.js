
import React from 'react';
import {connect} from 'react-redux'
const axios = require('axios');

class Home extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      firstname:"",
      lastname:"",
      pincode:"",
      phone:"",
      email:"",
      newsupdate:"",
      contact:""
    }
  }
componentDidMount() {

  
}
updateValue = (e) =>{
let {name, value} = e.target;
  if(name == "firstname" || name == "lastname" ){
    value = value.replace(/[^A-Za-z]/ig, '')
  }else if(name == "zipcode" || name == "phone"){
    value = value.replace(/[^0-9]/ig, '')
  }
  this.setState({
    [name]:value
  })
}
validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

 handleClick = (e)=>{
   e.preventDefault();
   console.log()

  // if(this.validateEmail(this.state.email)){
  //   this.props.history.push('/audio')
  // }
     
     //if(this.state.email != "" && this.state.firstname != "" && this.state.lastname != "" && this.state.phone !="" && this.state.pincode != ""){

    if(this.state.email === "" && this.state.firstname === "" && this.state.lastname === "" && this.state.phone === "" && this.state.pincode === ""){
      alert("Please fill basic details...")
    }else{
      this.props.history.push('/survey')
    //  const requestData = 
        //   {
        //     "careCanContactMe": false,
        //     "email": this.state.email,
        //     "firstName": this.state.firstname,
        //     "gender": "F",
        //     "lastName": this.state.lastname,
        //     "phoneNumber": this.state.phone,
        //     "sendNewsToMe": true,
        //     "zipCode": this.state.pincode
        //   }
    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ title: 'React POST Request Example' })
    // };
    }
 }
    render(){
       return(
          
        <section className="login-block login-page">
          <div className="transp"></div>
        <div className="container-fluid">
            <div className="row justify-content-end">
            <div className="col-sm-12 col-md-7 hs-content">
              <h1 className="text-center h-heading">Take our five-minute online hearing test !!</h1>
              <p className="text-center">
              Take an online hearing test to check for hearing loss.Hearing test results will tell if you should see a hearing professional for a hearing evaluation.
              </p>
            </div>
              <div className="col-sm-12 col-md-5">
                  <form className=""  onSubmit={this.handleClick}>
                      <div className="card col-sm-12 col-md-9">
                          <div className="card-block">
                          <h1 className="text-center heading ">Get started today</h1>
                              <div className="form-group form-primary"> <input type="text" className="form-control inp" name="firstname" value={this.state.firstname} placeholder="First Name" onChange={this.updateValue}/> </div>
                              <div className="form-group form-primary"> <input type="text" className="form-control inp" name="lastname" value={this.state.lastname} placeholder="Last Name" onChange={this.updateValue}/> </div>
                              <div className="form-group form-primary"> <input type="email" className="form-control inp" name="email" placeholder="Email" value={this.state.email}  onChange={this.updateValue}/> </div>
                              <div className="form-group form-primary"> <input type="text" className="form-control inp" name="zipcode" placeholder="Zip code" value={this.state.zipcode}  onChange={this.updateValue}/> </div>
                              <div className="form-group form-primary"> <input type="text" className="form-control inp" name="phone" placeholder="Phone number" value={this.state.phone} onChange={this.updateValue}/> </div>
                              <div className="form-group form-primary">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1" name="contact"  value={this.state.contact} onChange={this.updateValue} />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                Yes, Please have a hearing health care provider contact me directly.
                                </label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1" name="newsupdate" value={this.state.newsupdate} onChange={this.updateValue}/>
                                <label className="form-check-label" htmlFor="gridCheck1">
                                Yes, Please send me hearing health news and updates
                                </label>
                              </div>
                                </div>
                              <div className="row justify-content-center">
                                  <div className="col-md-4 text-center"> <input type="submit" className="btn sub-btn btn-shadow" name="submit" value="Start Now"/> 
                                  </div>
                              </div>
                            
                          </div>
                      </div>
                  </form>
              </div>
                
            </div>
        </div>
    </section>
      )
    }
}
const mapStateToProps =(state) => {
  return{
      mybudies : state.mybudies
  }
}

const mapDispatchToProps = (dispatch) => {
  const oneEntry = {user:"prakyath",data:"test"};
  return{
      addObject:()=> {dispatch({type:"ADD_OBJECT", data:oneEntry})}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
