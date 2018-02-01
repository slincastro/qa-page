import React, { Component } from 'react';
import './pyramid.css';

class Pyramid extends Component {
    render() {
        return (
            <div className="Pyramid-container">
                <svg height="1000" width="1000" className="Pyramid">
                    <polygon points="450,10 330,200 570,200" className="UI-tests"/>
                    <polygon points="330,200 570,200 700,400 200,400 " className="Int-tests" />
                    <polygon points="200,400 700,400 830,600 60,600 "  className="Unit-tests"/>
                </svg>
            </div>
        )
        ;
    }
}

export default Pyramid;