import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

export default class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt='profile'
              style={{height: '200px'}}
              />
            </div>
            <h2 style={{paddingTop:'2em'}}>Jhony Maurad</h2>
            <h4 style={{color: 'grey'}}>Junior Web Developer</h4>
            <hr style={{borderTop: '3px solid red', width:'50%'}}/>
            <p> Lorem dkfjaslkdfj fdkljfksdjf fdksjflkajfl ksdjfakl</p>
            <hr style={{borderTop: '3px solid red', width:'50%'}}/>
            <h5>Address</h5>
            <p>Bronx, New York</p>
            <h5>Phone</h5>
            <p>(347) 756-8128</p>
            <h5>E-mail</h5>
            <p>jhonymaurad@gmail.com</p>
            <hr style={{borderTop: '3px solid red', width:'50%'}}/>

          </Cell>

          <Cell col={8} className="resume-right-col">
            <h2>Education</h2>

            <Education
              startYear='2012'
              endYear ='2022'
              schoolName='Lehman college'
              schoolDescription='kdjfksaljf dskfjkasjf dksjfsk'
            />

            <Education
              startYear='200'
              endYear ='1999'
              schoolName='college of aeronautics '
              schoolDescription='kdjfksaljf dskfjkasjf dksjfsk djhdjhdfhu'
            />
              <hr style={{borderTop: '3px solid red', width:'50%'}}/>

              <h2>Experience</h2>

              <Experience
                startYear='2009'
                endYear='3000'
                jobName='First job'
                jobDescription='dfkasjdf fkdsjfksljf djf skjfsdkj fak'
              />

              <Experience
                startYear='2000'
                endYear='2070'
                jobName='second job'
                jobDescription='dfkasjdf fkdsjfksljf djf skjfsdkj fak'
              />

                <hr style={{borderTop: '3px solid red', width:'50%'}}/>

                <h2>Skills</h2>

                <Skills
                  skill='javascript'
                  progress= {100}
                />

                <Skills
                  skill='React'
                  progress= {80}
                />

                <Skills
                  skill='Java'
                  progress= {70}
                />

                <Skills
                  skill='Ruby'
                  progress= {50}
                />






          </Cell>
        </Grid>
      </div>
    )
  }
}
