import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import profileimg from  '../images/jmprofile.jpg';
import logo from '../images/logo.png';

export default class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Jhony Maurad</h2>
            <img
              src={logo}
              alt="profile"
              style={{height: '250px'}}
            />
            <p style={{width:"75%", margin: 'auto', paddingTop: '1em'}}>Junior Web Developer</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me:</h2>
            <hr/>
            <div className='contact-list'>
              <List>
                  <ListItem>
                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                      <i class="fas fa-phone" aria-hidden= 'true'></i>
                      (347) 756-8128
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                      <i class="fas fa-envelope-square" aria-hidden= 'true'></i>
                      < a href="mailto:jhonymaurad@gmail.com">jhonymaurad@gmail.com< /a>          
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                      <i class="fas fa-map-marked-alt" aria-hidden= 'true'></i>
                      Bronx - New York
                    </ListItemContent>
                  </ListItem>

              </List>
            </div>

          </Cell>
        </Grid>

      </div>
    )
  }
}
