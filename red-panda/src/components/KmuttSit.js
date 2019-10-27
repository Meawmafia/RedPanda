import React, { Component } from 'react'
import styled from 'styled-components'

const Kmutt = styled.img`
position: absolute;
width: 94px;
height: 94px;
left: 950px;
top: 22px;

`
const Sit = styled.img`
position: absolute;
width: 166px;
height: 53px;
left: 1044px;
top: 63px;
`
export default class KmuttSit extends Component {
    render() {
        return (
            <div>
                  <Kmutt src="/images/Kmutt.png" alt="KMUTT" />  
          <Sit src="/images/Sit.png" alt="SIT" />
        
            </div>
        )
    }
}
