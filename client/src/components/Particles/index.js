import React, { Component } from 'react';
import Particles from 'react-particles-js';
import "./style.css"

class ParticlesExp extends Component {

    render() {

        return (
          
            <Particles
                params={{
                    "particles": {
                        "line_linked": {
                                    "color":"#FFFFFF"
                                    },
                        "number": {
                            "value": 150
                        },
                        "size": {
                            "value": 5
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
                style={{
                        height: '100vh',
                        background: `#abd1d6` 
                 }}
                />
                )}
            }
export default ParticlesExp;