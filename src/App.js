import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
            <Header className= "header-color"
                    title={<Link style={{fontSize: '30px',textDecoration: 'none', color: 'black'}}
                                  to= '/'>Jhony Maurad
                          </Link>}
                    scroll>
                <Navigation>
                    <Link to="/resume" style={{fontSize: '20px', color: 'black'}}>Resume</Link>
                    <Link to="/projects" style={{fontSize: '20px', color: 'black'}}>Projects</Link>
                    <Link to="/contact" style={{fontSize: '20px', color: 'black'}}>Contact</Link>
                </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}}
                          to= '/'> Jhony Maurad
                  </Link>}>
                <Navigation>
                    <Link to="/resume" style={{fontSize: '20px', color: 'black'}}>Resume</Link>
                    <Link to="/projects" style={{fontSize: '20px', color: 'black'}}>Projects</Link>
                    <Link to="/contact" style={{fontSize: '20px', color: 'black'}}>Contact</Link>
                    <img src={logo}
                          style={{height: '300px', width:"200px", paddingTop:"150px"}}
                          alt="profile"/>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content">
                  <Main className= "site-content"/>
                </div>
            </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
