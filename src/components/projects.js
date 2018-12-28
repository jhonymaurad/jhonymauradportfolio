import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

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
          <Card shadow={5} style= {{minWidth: '450', margin: 'auto'}}>
            <CardTitle style= {{color:'fff', height: '170px', background:
            'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}}>
            React Project #1
            </CardTitle>
            <CardText>Lorem Ipsus dkdjahsfhsjkdfhlsajkfds</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color:'fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>

          <Card shadow={5} style= {{minWidth: '450', margin: 'auto'}}>
            <CardTitle style= {{color:'fff', height: '170px', background:
            'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}}>
            React Project #2
            </CardTitle>
            <CardText>Lorem Ipsus dkdjahsfhsjkdfhlsajkfds</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color:'fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>

          <Card shadow={5} style= {{minWidth: '450', margin: 'auto'}}>
            <CardTitle style= {{color:'fff', height: '170px', background:
            'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}}>
            React Project #3
            </CardTitle>
            <CardText>Lorem Ipsus dkdjahsfhsjkdfhlsajkfds</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color:'fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>

        </div>

      )
    }else if (this.state.activeTab === 1) {
      return(
        <div><h1>This is HTML | JavaScript</h1></div>
      )
    }else if (this.state.activeTab === 2) {
      return(
        <div><h1>This is Ruby on Rails</h1></div>
      )
    }
  }
  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange= {(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>HTML | JavaScript</Tab>
          <Tab>Ruby on Rails</Tab>
        </Tabs>

          <Grid>
            <Cell col ={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>

          </Grid>

      </div>
    )
  }
}
