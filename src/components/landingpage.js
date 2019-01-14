import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profileimg from '../images/jmprofile.jpg';
import background from '../images/maccode.jpeg'

export default class Landing extends Component {
  render() {
    return(
      <div style={{width:'100%', margin: 'auto'}}>
        <Grid className= "landing-grid" style={{backgroundImage: `url(${background})`} }>
          <Cell col={12}>
            <img
              src= {profileimg}
              alt= "profile-img"
              className= "profile-img"
            />
            <div className= "banner-text">
              <h3>Hello, I'm Jhony Maurad,</h3>
              <h3>I'm a junior web developer</h3>
              <hr/>
              <p>HTML | CSS | Javascript | React | Express | Ruby | Ruby on Rails | Java </p>
              <div className="social-links">
                <a href= "https://www.linkedin.com/in/jhony-maurad/" rel="noopener noreferrer" target="_blank">
                  <i class="fab fa-linkedin" aria-hidden="true"/>
                </a>

                <a href= "https://github.com/jhonymaurad" rel="noopener noreferrer" target="_blank">
                  <i class="fab fa-github-square" aria-hidden="true"/>
                </a>

                <a href= "https://www.freecodecamp.org/fcc02e1e3a0-4e72-44fb-9a43-7c1610e31602" rel="noopener noreferrer" target="_blank">
                  <i class="fab fa-free-code-camp" aria-hidden="true"/>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
