import React, { Component } from 'react'
import styled from 'styled-components'

const Textbox = styled.div`

width: 393px;
height: 125px;
left: 523px;


font-family: Staatliches;
font-style: normal;
font-weight: normal;
font-size: 90px;
line-height: 120px;
text-align: center;

color: #000000;


border: 5px solid #000000;
box-sizing: border-box;

`
const img = styled.img`

width: 398px;
height: 398px;
left: 520px;
top: 193px;

`
const text = styled.div`

width: 602px;
height: 64px;
left: 419px;
top: 738px;

font-family: Teko;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 69px;
text-align: center;

color: #000000;

`

export default class LogoRedpanda extends Component {
    render() {
        return (
<div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      
    </div>
    <div class="col-md-auto">
    <img src="/images/logo.jpg" class="rounded mx-auto d-block" alt="Logo" />
    </div>
    <div class="col col-lg-2">
      
    </div>
  </div>

  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
     
    </div>
    <div class="col-md-auto">
    <Textbox>RED PANDA</Textbox>
    </div>
    <div class="col col-lg-2">
     
    </div>
  </div>

  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      
    </div>
    <div class="col-md-auto">
   <text>cutest existence in the world.</text>
    </div>
    <div class="col col-lg-2">
      
    </div>
  </div>
  </div>





  
  
  
    
  

        )
    }
}
