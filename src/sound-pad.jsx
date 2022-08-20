import React, { Component } from "react";
import './soundpad.css';
import sample0 from "./sounds/sample0.mp3";
import sample1 from "./sounds/sample1.mp3";
import sample2 from "./sounds/sample2.mp3";
import sample3 from "./sounds/sample3.mp3";
import sample4 from "./sounds/sample4.mp3";
import sample5 from "./sounds/sample5.mp3";
import sample6 from "./sounds/sample6.mp3";
import sample7 from "./sounds/sample7.mp3";
import sample8 from "./sounds/sample8.mp3";
import sample9 from "./sounds/sample9.mp3";
import sample10 from "./sounds/sample10.mp3";
import sample11 from "./sounds/sample11.mp3";
import sample12 from "./sounds/sample12.mp3";
import sample13 from "./sounds/sample13.mp3";
import sample14 from "./sounds/sample14.mp3";
import sample15 from "./sounds/sample15.mp3";
import sample16 from "./sounds/sample16.mp3";
import sample17 from "./sounds/sample17.mp3";
import sample18 from "./sounds/sample18.mp3";
import sample19 from "./sounds/sample19.mp3";
import sample20 from "./sounds/sample20.mp3";
import sample21 from "./sounds/sample21.mp3";
import sample22 from "./sounds/sample22.mp3";
import sample23 from "./sounds/sample23.mp3";
import sample24 from "./sounds/sample24.mp3";


const AllButtons = document.getElementsByClassName("sound-pad");
const AllSamples = [sample0, sample1, sample2, sample3, sample4, sample5, sample6, sample7, sample8, sample9, sample10, sample11, sample12, sample13, sample14, sample15, sample16, sample17, sample18, sample19, sample20, sample21, sample22, sample23, sample24];
 

const PlaySound = () => {
  for (let i = 0; i < AllButtons.length; i++) {
    AllButtons[i].addEventListener("click", function() {
  const sound = new Audio(AllSamples[i]);
  sound.play();
    });


  }

}



const SoundPad = () => {

  return <button className="sound-pad" onClick={PlaySound}>
  </button>;
}


export default SoundPad;