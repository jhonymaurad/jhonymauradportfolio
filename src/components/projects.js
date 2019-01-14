import React, { Component } from 'react';
import '../App.css';

import ProjectCard from './ProjectCard';
import { Tabs, Tab, Grid, Cell, IconButton } from 'react-mdl';
import connect4 from '../images/connect4.png';
import findAfriend from '../images/icon-findafriend.png';
import exquisite from '../images/exquisite.png';
import coachnotes from '../images/coach-notes.png';

export default class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories(){
    if (this.state.activeTab === 0) {
      return(
        <div className="projects-grid">
          <ProjectCard
            url={connect4}
            title='Connect Four Game'
            description='(Legend of Zelda theme) A Connect Four game developed using only JavaScript, HTML and CSS. The purpose of the site was to practice two dimensional Arrays in JavaScript and the logic behind determining winning conditions.'
            linkGit='https://github.com/jhonymaurad/Connect-Four'
            linkLiveDemo='https://eight-floor.surge.sh/'
          />
        </div>
      )
    }else if (this.state.activeTab === 1) {
      return(
        <div className="projects-grid">
          <ProjectCard
            url={exquisite}
            title='Exquiste Chronicles'
            description='A collaborative writing application based off of the idea of Exquisite Corpse, where several people register to participate in the genre of a particular category of narrative and share in the surprise of the cumulative story.'
            linkGit='https://github.com/jhonymaurad/exquisite-chronicle'
            linkLiveDemo='http://exquisite-chronicle.surge.sh/'
          />
          <ProjectCard
            url={findAfriend}
            title='Find A Friend'
            description='I want to use the The Dog API to create a website to help make the right choice about what type of dog is right for you. In the website you can search by breed from a dropdown menu. The information and a picture will be display for that specific choice of breed.'
            linkGit='https://github.com/jhonymaurad/api_dogs_project/tree/master/dog-project'
            linkLiveDemo='http://find-a-friend.surge.sh/'
          />
        </div>
      )
    }else if (this.state.activeTab === 2) {
      return(
        <div className="projects-grid">
          <ProjectCard
            url={coachnotes}
            title='Coach Notes'
            description='For coaches everywhere…A simple website that lets you manage and keep track of your matches, training activities and players currently coaching.The purpose of this application is to demonstrate the Rails backend and React frontend.'
            linkGit='https://github.com/jhonymaurad/coachnotes'
            linkLiveDemo='https://tranquil-thicket-20809.herokuapp.com/'
          />
        </div>
      )
    }
  }
  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange= {(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab>HTML | JavaScript</Tab>
          <Tab>React</Tab>
          <Tab>Ruby on Rails</Tab>
        </Tabs>
          <Grid>
            <Cell col ={12}>
              <div className="projects-grid">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
