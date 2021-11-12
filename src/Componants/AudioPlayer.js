
import React from 'react';
import {connect} from 'react-redux'
import { Button,Modal } from 'react-bootstrap'
// Import your audio file
import song from "../assets/test.mp3";
import song2 from "../assets/Symphony.mp3"
//images

import male from "../assets/images/male.png"
import female from "../assets/images/female.png"
import headset  from '../assets/images/headset.png';

import play from "../assets/images/play.png"
import pause  from '../assets/images/pause.png';

import img1 from "../assets/images/bird.png"
import img2 from "../assets/images/coin.png"
import img3 from "../assets/images/ear.png"
import img4 from "../assets/images/fan.png"
import img5 from "../assets/images/rightear.png"
import img6 from "../assets/images/tree.png"

import HDS1 from "../assets/images/headset1.jpg";
import HDS2 from "../assets/images/headset2.jpg";
import HDS3 from "../assets/images/headset3.jpg";
import HDS4 from "../assets/images/headset4.jpg";

class AudioPlayer extends React.Component{
constructor(props){
  super(props)
  this.state = {
    audio: new Audio(song),
    itemindex:0,
    isPlaying: false,
    gender:"",
    age:0,
    outputsource:"",
    page:"",
    nextButton:true,
    previousButton:true,
    submitButton:false,
    userData:{},
    email:"",
    emailConfirmation:true,
    hearingDevice:"",
    data:{
      "0":{
          renderTo:"genderSelection",
          heading:"Please select gender",
          volumerequired:false
      },
      "1":{
          renderTo:"audioOutput",
          heading:"Please select option to continue (Roccomended)",
          volumerequired:false
        },
      "2":{
          renderTo:"player",
          imgsrc:img2,
          audiosrc:song2,
          heading:"Press the play button to start the tone (Right Ear 200KHz) ",
          volumerequired:true,
          volume:1,
          toneName:"bird"
        },
   "3":{
        renderTo:"player",
        imgsrc:img3,
        audiosrc:song,
        heading:"Press the play button to start the tone (Left Ear 1KHz) ",
        volumerequired:true,
        volume:1,
        toneName:"left_ear"
      },
  "4":{
        renderTo:"player",
        imgsrc:img4,
        audiosrc:song,
        heading:"Press the play button to start the tone (Right Ear 2KHz) ",
        volumerequired:true,
        volume:1,
        toneName:"right_ear"
      },
      "5":{
        renderTo:"player",
        imgsrc:img5,
        audiosrc:song,
        heading:"Press the play button to start the tone (Right Ear 3KHz)",
        volumerequired:true,
        volume:1,
        toneName:"tree"
      },
      "6":{
        renderTo:"player",
        imgsrc:img6,
        audiosrc:song,
        heading:"Press the play button to start the tone (Left Ear 500GHz) ",
        volumerequired:true,
        volume:1,
        toneName:"fan"
      },
      "6":{
        renderTo:"player",
        imgsrc:img6,
        audiosrc:song,
        heading:"Press the play button to start the tone (Left Ear 500GHz) ",
        volumerequired:true,
        volume:1,
        toneName:"coins"
      },
      "7":{
        renderTo:"age",
        heading:"Press the play button to start the tone (Left Ear 500GHz) ",
        volumerequired:false
      }
    }
  }
  
}
dismiss() {
  this.props.unmountMe();
}
updateHeadset = (e) => {
  this.setState({
    hearingDevice:e.target.name
  })
}

componentDidMount() {
  const sesUsr = sessionStorage.getItem("q-user");
    if(sesUsr){
      console.log("user is ",sesUsr.email);
      this.setState({
        email:sesUsr.email
      })
    }else{
      console.log("user not found");
      this.props.history.push('/')
    }
  

  this.state.audio.addEventListener('ended', () => this.setState({ isPlaying: false }));
}
componentDidUnMount() {
  this.state.audio.addEventListener('ended', () => this.setState({ isPlaying: false }));
}
// componentWillUnmount() {
//   audio.removeEventListener('ended', () => this.setState({ isPlaying: false }));  
// }

  // Main function to handle both play and pause operations
  volumeDowm = () => {
    let voldown = parseFloat((this.state.audio.volume - 0.1).toFixed(3));
    //console.log("volume down",voldown)
    if(voldown < 0){alert("volume reached to min");return}
    this.state.audio.volume = voldown;

    const stdata = this.state.data;
    const indx = this.state.itemindex
    //this.state.audio.volume = dec;
  }
  setAge = (e) =>{
    this.setState({age:e.target.value})
  }
  volumeUp = () =>{
    let volup = parseFloat((this.state.audio.volume + 0.1).toFixed(3));
    console.log("volume up",volup)
    if(volup > 1){alert("volume reached to max");return}
    this.state.audio.volume = volup;
  }
  next = () => {
    this.state.audio.pause();
    const stdata = this.state.data;
    const indx = this.state.itemindex +1;

    if(this.state.gender === ""){alert("please enter the gender"); return;}

    if( indx >= Object.keys(stdata).length ){this.props.history.push("/result"); return}
    
    console.log("data____",stdata[indx])
    this.state.audio.pause();
    
    console.log("audio updated",Object.keys(stdata).length, indx)
    let currentData = this.state.userData;
    if(stdata[this.state.itemindex].renderTo == "player"){
  
      currentData["volume"] = this.state.audio.volume;
      currentData["toneName"] = stdata[this.state.itemindex].toneName;
      console.log("user data ---",currentData,stdata[this.state.itemindex].heading);
      this.setState({
        audio: new Audio(stdata[indx].audiosrc),
        itemindex:indx,
        isPlaying: false,
        previousButton:true,
        userData:currentData
      })
    }else{
      this.setState({
        audio: new Audio(stdata[indx].audiosrc),
        itemindex:indx,
        isPlaying: false,
        previousButton:true
      })
    }
    
    
  }
  previous = () => {
    this.state.audio.pause();
    const stdata = this.state.data;
    const indx = this.state.itemindex - 1;

    // if(indx == 0){
    //   this.setState({previousButton:true,
    //     nextButton:true
    //   })
    // }else if(indx < 0){
    //   this.setState({previousButton:false,
    //     nextButton:true
    //   })
    // }

    if(indx < 0) return
    const togglePG = stdata[indx].renderTo != "genderSelection" || stdata[indx].renderTo != "audioOutput"? true: false;


    let currentData = this.state.userData;
    if(stdata[this.state.itemindex].renderTo == "player"){
  
      currentData["volume"] = this.state.audio.volume;
      currentData["toneName"] = stdata[this.state.itemindex].toneName;
      console.log("user data previous---",currentData,stdata[this.state.itemindex].heading);
      this.setState({
        audio: new Audio(stdata[indx].audiosrc),
        itemindex:indx,
        isPlaying: false,
        previousButton:true,
        userData:currentData
      })
    }else{
      this.setState({
        audio: new Audio(stdata[indx].audiosrc),
        itemindex:indx,
        isPlaying: false
      })
    }
  //}
  }
  sendForm = () =>{
    //check email confirmed 
    //update last audio data
    //post call here
    this.props.history.push('/report')
  }
  playPause = () => {
    
    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {

      // Play the song if it is paused
      this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };
  updateGender = (e) => {
    const value = e.target.name;
    this.setState({gender:value})
    //console.log("target____",value)
  }
  emailConfirmation =() => {
    this.setState({ showHide: !this.state.emailConfirmation })
}
  render() {
    const data = this.state.data;
    const audioIn = this.state.itemindex;
    const togglePG = data[audioIn].renderTo;

    const progress = Object.keys(data).map(key => 
      <li className ={key <= audioIn ? "active":"notactive" }></li>
  )




     //{/*---------------- hearing process ---------------*/}


    return (

        <div className="container-fluid">
          <div className={this.state.isPlaying?"bg-animation-waves":"invisible"}></div>
            <div className="row justify-content-md-center">
              <div className="col-md-8 col-sm-12 mb-md-80 progress-container text-center">

                <ul id="progress" className = "list-inline mx-auto">
                  {progress}
                </ul>
                <h3 className="audio-header">{data[audioIn].heading}</h3>
              </div>
                <div className="col-md-8 col-sm-12 justify-content-md-center">

                   {/*---------------- gender selection ---------------*/}
                   
              {togglePG == "genderSelection"?
               
                <ul className = "list-inline mx-auto text-center gi-main">
                    <li>
                      <div className = {this.state.gender === "male"?"gi-container active-content":"gi-container"}><img src={male} name="male" onClick={this.updateGender} className=" gen-img"/><span>Male</span></div>
                    </li>
                    <li>
                      <div className = {this.state.gender === "female"?"gi-container active-content":"gi-container"}><img src={female} name="female" onClick={this.updateGender} className=" gen-img"/><span>Female</span></div>
                    </li>
                </ul>
                   
                  :""}
            {togglePG == "audioOutput"?<>
                 <div className="col-md-3 col-sm-8 margin-auto"><img src={HDS1} name="airpod" onClick={this.updateHeadset} className={this.state.hearingDevice == "airpod" ? "active-content playing-image green-border":"playing-image green-border"} /></div>
                 <div className="col-md-3 col-sm-8 margin-auto"><img src={HDS2} name="headset" onClick={this.updateHeadset}  className={this.state.hearingDevice == "headset" ? "active-content playing-image green-border":"playing-image green-border"}/></div>
                 <div className="col-md-3 col-sm-8 margin-auto"><img src={HDS3} name="earphone" onClick={this.updateHeadset}  className={this.state.hearingDevice == "earphone" ? "active-content playing-image green-border":"playing-image green-border"}/></div>
                 <div className="col-md-3 col-sm-8 margin-auto"><img src={HDS4} name="wiredHeadphone" onClick={this.updateHeadset}  className={this.state.hearingDevice == "wiredHeadphone" ? "active-content playing-image green-border":"playing-image green-border"}/></div>
                  </>
                  :""}
            {togglePG == "player"? 
                  <ul className = "list-inline text-center audio-controls">
                    <li className =""><button onClick={this.volumeDowm} className="plus-minus mr0">-
                      </button>
                    </li>
                    <li >
                      <div className="image-container">
                        <img src={data[audioIn].imgsrc} className="playing-image"/>
                        <img src={this.state.isPlaying ? pause:play} className="play-pause" onClick={this.playPause}/>
                      </div>
                    </li>
                    <li className =""><button onClick={this.volumeUp} className="plus-minus ml0">+</button></li>
                    </ul>
                    :""    
                }
                 {togglePG == "age"?
                  <select id="age" name="age" onChange={this.setAge} className="sel-item">
                    <option value="1" >Select your age</option>
                      <option value="1" >1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                    </select>
                  :""}

                  
                </div>
                <div className="row justify-content-center text-center button-container">
                <ul className = "list-inline mx-auto btn-container">
                  
                <li><button  className="btn next-previous btn-shadow" onClick ={this.previous}> {"<   Previous" }</button> </li>
                
              {audioIn + 1 === Object.keys(data).length ?<li><button  className="btn next-previous btn-shadow" onClick={this.sendForm}>{"Submit"}</button></li>:<li><button  className="btn next-previous btn-shadow" onClick={this.next}>{"Next  >"}</button></li>}
                </ul>
                        {/* <div className="col-md-3 col-sm-6 col-xs-6">
                            <button  className="btn next-previous btn-container" onClick ={this.previous}> {"<   previous" }</button>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6 btn-container">
                            <button  className="btn next-previous btn-container" onClick={this.next}>{"next  >"}</button>
                        </div> */}


                </div>
            </div>
        </div>
    
    );
  }
}

export default AudioPlayer