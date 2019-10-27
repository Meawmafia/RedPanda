import React, { Component } from 'react'
import styled from 'styled-components'

const Textbox = styled.div`

position: absolute;
width: 393px;
height: 125px;
left: 75px;


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
const Text = styled.div`
position: absolute;
width: 602px;
height: 64px;
margin: 5px 30px 30px -40px;
top: 650px;


font-family: Teko;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 69px;
text-align: center;

color: #000000;

`
const img = styled.img`

position: absolute;
width: 398px;
height: 398px;

top: 193px;

`


export default class LogoRedpanda extends Component {
  render() {
    return (

     <div>

        <img src="/images/logo.jpg" class="rounded mx-auto d-block" alt="Logo" />
        <Textbox>RED PANDA</Textbox>
        <Text>cutest existence in the world.</Text>
      </div>











    )
  }
}
