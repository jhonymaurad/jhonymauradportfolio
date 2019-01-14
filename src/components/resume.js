import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import profileimg from  '../images/jmprofile.jpg';
import resume from '../images/resume.docx';

export default class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4} className="resume-left-col">
            <div style={{textAlign: 'center'}}>
              <img
              src={profileimg}
              alt='profile'
              style={{height: '200px', paddingTop:'2em' }}
              />
            </div>
            <h2 style={{paddingTop:'1em'}}>Jhony Maurad</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid red', width:'50%'}}/>
            <p> Computer Science student at Lehman College and Web Developer student
            at General Assembly with a passion for web application development and
            design. Fast learner, hard worker and team player who is proficient in
            an array of multimedia Web tools. </p>
            <hr style={{borderTop: '3px solid red', width:'50%'}}/>
            <h5>Technical toolbox</h5>
            <h6>Web Development:</h6>
            <p>HTML, CSS, JavaScript, React,Ruby, Ruby on Rails, Responsive Design, De-bugging, GitHub, Java.</p>
            <h6>Miscellaneous:</h6>
            <p>MS Office, Data Entry, Customer Service</p>
            <h5>Phone</h5>
            <p>(347) 756-8128</p>
            <h5>E-mail</h5>
            <p>jhonymaurad@gmail.com</p>
            <hr style={{borderTop: '3px solid red', width:'50%'}}/>
            <hr style={{borderTop: '3px solid red', width:'50%'}}/>
            <a href={resume} target="_blank"> Download Resume</a>
          </Cell>

          <Cell col={8} className="resume-right-col">
            <h2>Education</h2>

            <Education
              startYear='2017'
              endYear ='expected graduation: Fall 2019'
              schoolName='CUNY/Lehman College'
              schoolDescription='Computer Science junior'
            />

            <Education
              startYear='August 2018'
              endYear ='January 2019'
              schoolName='Per Scholas / General Assembly '
              schoolDescription='Web Development Immersive'
            />

            <Education
              startYear='September 2002'
              endYear ='May 2003'
              schoolName='College of Aeronautics La Guardia '
              schoolDescription='Completed coursework towards Graphic Designer'
            />
              <hr style={{borderTop: '3px solid red', width:'50%'}}/>

              <h2>Experience</h2>

              <Experience
                startYear='June 2007'
                endYear='January 2018'
                jobName='Dry Cleaning spotter and machine operator / Customer Service / Delivery'
                jobDescription='Operate Dry-Cleaning machine to dry- clean industrial or household articles, such as cloth garments, suede, leather, furs, blankets and draperies, linens, rugs and carpets. Answer customer telephone calls regarding existing accounts. Resolve service issues and share benefits of additional services. Pick-up and delivery orders to customers location. Obtain signatures and payments or arrange for recipients to make payments. Record information such as items received and delivered and recipients’ responses to messages'
              />

              <Experience
                startYear='2003'
                endYear='2007'
                jobName='Delivery'
                jobDescription='Commercial vehicle operator'
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
