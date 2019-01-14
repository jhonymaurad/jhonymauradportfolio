import React from 'react';
import '../App.css';

export default function ProjectCard (props){
  return(
    <div className='cardFrame'>
      <div className='projectImg'>
          <img  src={props.url}
                className='imgCss'
                alt='project image'/>
      </div>
      <div className='projectTitle'>
        <h3>{props.title}</h3>
      </div>
      <div className='projectDescription'>
        <p>{props.description}</p>
      </div>
      <div className='projectLinks'>
        <a href= {props.linkGit} rel="noopener noreferrer" target="_blank">
          <button className='projectButton'>GitHub </button>
        </a>
        <a href= {props.linkLiveDemo} rel="noopener noreferrer" target="_blank">
          <button className='projectButton'>Live Demo </button>
        </a>
      </div>
    </div>
  )
}
