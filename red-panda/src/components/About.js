import React, { Component } from 'react'
import styled from 'styled-components'

const Head = styled.div`
position: absolute;
width: 566px;
height: 112px;
left: 658px;
top: 278px;

font-family: Oswald;
font-style: normal;
font-weight: normal;
font-size: 64px;
line-height: 95px;

color: #000000;
`
const Text = styled.div`
position: absolute;
width: 649px;
height: 64px;
left: 658px;
top: 390px;

font-family: Spectral;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 37px;
text-indent: 20px;

color: #000000;

`
export default class About extends Component {
    render() {
        return (
            <div>
                <Head>The Red Panda is.. </Head>
                <Text>slightly larger than a domestic cat with a bear-like body and thick russet fur. The belly and limbs are black, and there are white markings on the side of the head and above its small eyes. Red pandas are very skillful and acrobatic animals that predominantly stay in trees. </Text>
            </div>
        )
    }
}
