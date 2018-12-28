import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class Landing extends Component {
  render() {
    return(
      <div style={{width:'100%', margin: 'auto'}}>
        <Grid className= "landing-grid">
          <Cell col={12}>
            <img
              src= "https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg"
              alt= "profile-img"
              className= "profile-img"
            />
            <div className= "banner-text">
              <h1>Junior Web Developer</h1>
              <hr/>
              <p>HTML | CSS | Javascript | React | Express | Ruby | Ruby on Rails | Java </p>
              <div className="social-links">

                <a href= "http://google.com" rel="noopener noreferrer" target="_blank">
                  <i class="fab fa-linkedin" aria-hidden="true"/>
                </a>

                <a href= "http://google.com" rel="noopener noreferrer" target="_blank">
                  <i class="fab fa-github-square" aria-hidden="true"/>
                </a>

                <a href= "http://google.com" rel="noopener noreferrer" target="_blank">
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
