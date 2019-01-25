import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import profileimg from  '../images/jmprofile.jpg';
import resume from '../images/jhony-maurad-resume.docx';

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
            <p> Computer Science student at Lehman College and Web Developer with a passion for web application development and
            design. Fast learner, hard worker and team player who is proficient in
            an array of multimedia Web tools. </p>
            <hr style={{borderTop: '3px solid red', width:'50%'}}/>
            <h5>Technical toolbox</h5>
            <h6>Web Development:</h6>
            <p>HTML, CSS, JavaScript, React,Ruby, Ruby on Rails, Responsive Design, De-bugging, GitHub, Java.</p>
            <h6>Miscellaneous:</h6>
            <p>MS Office, Data Entry, Customer Service</p>
            <h5>Location</h5>
            <p>Bronx, New York</p>
            <h5>Phone</h5>
            <p>(347) 756-8128</p>
            <h5>E-mail</h5>
            <p>jhonymaurad@gmail.com</p>
            <h5>LinkedIn</h5>
            <p>linkedin.com/in/jhony-maurad/</p>
            <hr style={{borderTop: '3px solid red', width:'50%'}}/>
            <hr style={{borderTop: '3px solid red', width:'50%'}}/>
            <a href={resume} target="_blank" style={{textAlign: 'center'}}>
              <i class="fas fa-download" aria-hidden="true" style={{paddingLeft: '50px'}} />
              <h4>Download Resume</h4>
            </a>
          </Cell>

          <Cell col={8} className="resume-right-col">
            <h2>Education</h2>
            <Education
              startYear='Fall 2017'
              endYear ='Present'
              schoolName='CUNY/Lehman College'
              schoolDescription='B.S. Computer Science '
            />

            <Education
              startYear='October 2018'
              endYear ='January 2019'
              schoolName='General Assembly'
              schoolDescription='Web Development Certificate of Completion'
            />

            <Education
              startYear='August 2018'
              endYear ='October 2018'
              schoolName='Per Scholas'
              schoolDescription='Web Development Training'
            />

            <Education
              startYear='Fall 2001'
              endYear ='Spring 2003'
              schoolName='College of Aeronautics La Guardia '
              schoolDescription='Completed coursework towards B. S. Graphic Design'
            />
              <hr style={{borderTop: '3px solid red', width:'50%'}}/>

              <h2>Experience</h2>

              <Experience
                startYear='October 2018'
                endYear='January 2019'
                jobName='General Assembly / Web Development Immersive student	'
                jobDescription='Learned programming fundamentals, along with the basics of computing, networks, and data structures. Developed wireframes and track a collaborative development process using version control. Built dynamic front-end for web applications using a modern JS library, such as React and used CSS to add layout and style. Learned to build web applications from the ground up using a modern web language and framework like Ruby on Rails or Express. Developed high-quality APIs using Node.js and integrate data from other apps into projects.'
              />

              <Experience
                startYear=' June 2003'
                endYear='January 2018'
                jobName='Prestige Cleaners'
                jobDescription='Provided customer counter service, resolved client concerns, and promoted additional service opportunities to existing dry cleaning clients. Delivered orders to customer’s locations. Dry-Cleaning machine operator and spotter with experience in garment production.'
              />
                <hr style={{borderTop: '3px solid red', width:'50%'}}/>
                <h2>Skills</h2>
                <Skills
                  skill='JavaScript'
                  progress= {80}
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

                <Skills
                  skill='HTML'
                  progress= {90}
                />

                <Skills
                  skill='CSS'
                  progress= {90}
                />
          </Cell>
        </Grid>
      </div>
    )
  }
}
