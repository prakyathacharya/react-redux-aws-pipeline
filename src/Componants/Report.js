
import React from 'react';
import Mylist from './Mylist';
import {connect} from 'react-redux';

const green = "#10dd21";
const yellow = "#f5dd08"
const orange = "#f98b2c";
const red = "#d10c0c";

class Report extends React.Component{
    constructor(props){
        super(props);
        this.state={
          width:"50",
          sessionData:""
        }
    }
    backTohome = ()=>{
      this.props.history.push('/')
  }

  // componentDidMount() {
  //   fetch("http://localhost:8080/hearingCheck/generateUserReport?email=abc.com&userId=QualUser01924728")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           items: result.items
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )

  
  componentDidMount() {
    //const sesUsr = sessionStorage.getItem("q-user");
    const tes = {
      "reportStatus": "Good Hearing",
      "reportSummary": "Test Results: Good Hearing",
      "questionSummary": "Your hearing resutls on different usecases show that you can have some hearing difficuties",
      "toneDetails": [
          {
              "toneHz": "500Hz",
              "toneName": "Tone1",
              "leftEarUserVal": 90,
              "rightEarUserVal": 40,
              "leftEarReportVal": 90,
              "rightEarReportVal": 45
          },
          {
              "toneHz": "1Khz",
              "toneName": "Tone2",
              "leftEarUserVal": 10,
              "rightEarUserVal": 20,
              "leftEarReportVal": 40,
              "rightEarReportVal": 45
          },
          {
              "toneHz": "2Khz",
              "toneName": "Tone3",
              "leftEarUserVal": 70,
              "rightEarUserVal": 5,
              "leftEarReportVal": 40,
              "rightEarReportVal": 40
          },
          {
              "toneHz": "4Khz",
              "toneName": "Tone4",
              "leftEarUserVal": 40,
              "rightEarUserVal": 15,
              "leftEarReportVal": 45,
              "rightEarReportVal": 45
          },
          {
              "toneHz": "6Khz",
              "toneName": "Tone5",
              "leftEarUserVal": 10,
              "rightEarUserVal": 50,
              "leftEarReportVal": 40,
              "rightEarReportVal": 40
          }
      ]
  }
    this.setState({
              sessionData: tes
            });
    // if(sesUsr === null || sesUsr === undefined){
    //   console.log("user not found");
    //   this.props.history.push('/')
      
    // }else{

    //   console.log("user is ",JSON.parse(sesUsr).email);
    //   this.setState({
    //     email:JSON.parse(sesUsr).email
    //   })
    // }
    // fetch("http://localhost:3200/hearingCheck/getUserReportFromEmail?reportEmail=abc@gmail.com&userId=QualUser01924728")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         sessionData: result
    //       });
    //     },
    //     (e) => {
    //       alert("failed to load resaource..",e)
    //     }
    //   )
  }
  getProgress = (val) =>{
    if(val > 0 && val <=10 ){
      return green;
    }else if(val > 10 && val <= 30.4){
      return yellow;
    }else if(val > 30.4 && val <= 60.4){
      return orange;
    }else if(val > 60.4 && val <=100){
      return red;
    }
  }
    render(){

      const sessionData = this.state.sessionData;
      console.log("______",sessionData.toneDetails);
      let renObjData = "";
      let HZc = "";
      let lftEar = '';
      let rhtEar='';

      if(sessionData.hasOwnProperty("toneDetails")){
        renObjData = sessionData.toneDetails.map( curItem => {
              return <div className="row">
                <div className="col-md-2 col-lg-2 col-sm-2 text-center"> {curItem.toneName}
                </div>
                <div className="col-md-10 col-lg-10 col-sm-10 text-center pl0 br-bt br-lft">
                  <div className="progressline" style={{width:curItem.leftEarUserVal+"%", backgroundColor:this.getProgress(curItem.leftEarUserVal)}}></div>
                  <div className="progressline" style={{width:curItem.rightEarUserVal+"%", backgroundColor:this.getProgress(curItem.rightEarUserVal)}}></div>
                </div>
                </div>
          });
          lftEar = sessionData.toneDetails.map( curItem => {
            return <td>{curItem.leftEarReportVal}</td>
          })
          rhtEar = sessionData.toneDetails.map( curItem => {
            return <td>{curItem.rightEarReportVal}</td>
          })
          HZc = sessionData.toneDetails.map( curItem => {
            return <td>{curItem.toneHz}</td>
          })
        }
      
    //   const renObjData = sessionData..map( curItem => {
    //     return <div className="row">

    //       <div className="col-md-2 col-lg-2 col-sm-2 text-center"> {curItem.toneName}
    //       </div>
    //       <div className="col-md-10 col-lg-10 col-sm-10 text-center pl0 br-bt">
    //         <div className="progressline" style={{width:curItem.leftEarUserVal+"%", backgroundColor:this.getProgress(curItem.leftEarUserVal)}}></div>
    //         <div className="progressline" style={{width:curItem.rightEarUserVal+"%", backgroundColor:this.getProgress(curItem.rightEarUserVal)}}></div>
    //       </div>
    //       </div>
    // });
    //     if(this.props.user.user === ""){
    //   this.props.history.push("/");
    // }
    //     const dataCen = "test";
    //     console.log('in contact page',this.props.user)
    //     //props.history.push('/about)  this will redirects to about page
      

        
       return(
        <div className="container">
            <div className="row text-center mr-tb">
                    <h1 className="badge-header">The score indicates that you may have</h1>
                    <p className="badge-content">{sessionData.questionSummary}</p>
            </div>
            <div className="row justify-content-md-center mr-bt2p">
              <div className="col-md-4 col-lg-4 col-sm-4 text-center">
                <input type="submit" className="btn snd-btn btn-shadow" name="submit" value="Find a professional"/> 
              </div>
              <div className="col-md-4 col-lg-4 col-sm-4 text-center">
                <input type="submit" className="btn snd-btn btn-shadow" name="submit" value="Health questions"/> 
              </div>
              <div className="col-md-4 col-lg-4 col-sm-4 text-center">
                <input type="submit" className="btn snd-btn btn-shadow"  name="submit" onClick={this.backTohome} value="Back to home page"/> 
              </div>
            </div>

  {renObjData? <>
            <div className="row">

            <div className="col-md-2 col-lg-2 col-sm-2 text-center">
            </div>
            <div className="col-md-1 col-lg-1 col-sm-1 text-center green br-lft">
              <span className="sp-hd">Good hearing</span>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-2 text-center yellow br-lft">
            <span className="sp-hd">Mild issues</span>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3 text-center orange br-lft">
            <span className="sp-hd">Modarate issues</span>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 text-center red br-lft br-rht">
            <span className="sp-hd">Severe issues</span>
            </div>
            </div>


            {renObjData}

            <div className="row ">
            <div className="col-md-2 col-lg-2 col-sm-2 text-center"> 
                </div>

            <div className="col-md-1 col-lg-1 col-sm-1 text-center pd-10 br-rht br-lft">0</div>
            <div className="col-md-1 col-lg-1 col-sm-1 text-center pd-10 br-rht">10</div>
            <div className="col-md-1 col-lg-1 col-sm-1 text-center pd-10 br-rht">20</div>
            <div className="col-md-1 col-lg-1 col-sm-1 text-center pd-10 br-rht">30</div>
            <div className="col-md-1 col-lg-1 col-sm-1 text-center pd-10 br-rht">40</div>
            <div className="col-md-1 col-lg-1 col-sm-1 text-center pd-10 br-rht">50</div>
            <div className="col-md-1 col-lg-1 col-sm-1 text-center pd-10 br-rht">60</div>
            <div className="col-md-1 col-lg-1 col-sm-1 text-center pd-10 br-rht">70</div>
            <div className="col-md-1 col-lg-1 col-sm-1 text-center pd-10 br-rht">80</div>
            <div className="col-md-1 col-lg-1 col-sm-1 text-center pd-10 br-rht">90</div>
            </div>



              <div className="row">
              <table className="table table-bordered rti-table mrbt">
                    <tbody>
                      <tr>
                        <th scope="row">Right ear</th>
                        {rhtEar}
                      </tr>
                      <tr>
                        <th scope="row">Left ear</th>
                        {lftEar}
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        {HZc}
                      </tr>
                    </tbody>
                  </table>
              </div>
              </>:<h2 className="col-md-12 col-lg-12 col-sm-12 text-center">There is no record to show..!</h2>}
        </div>
        
      )
    }
}

const mapStateToProps = state => {
    return { user: state.mybudies };
  };

export default connect(mapStateToProps)(Report);