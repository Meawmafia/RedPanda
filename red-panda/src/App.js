import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import LogoRedpanda from './components/LogoRedpanda'
import KmuttSit from './components/KmuttSit'
import About from './components/About'

const Spacer = styled.div `
height: 400px;
`
function App() {
  return (
    <div>

<div class="container">
  <div class="row justify-content-lg-center">
    <div class="col col-lg-2">
      
    </div>
    <div class="col-lg-auto">
    <LogoRedpanda />
    </div>
    <div class="col col-lg-2">
    <KmuttSit />
    </div>
  </div>
  </div>
  <Spacer />
    <div class="row">
    <div class="col-4"><img src="/images/Redpanda1.png" alt="Redpanda 1" /><About /></div>
    <div class="col-8"></div>
  </div>
  </div>
  
  );
}

export default App;
