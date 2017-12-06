import React from 'react';
import tedLogo from './img/tedLogo.svg'
import { Link, withRouter } from 'react-router-dom'
import './Header.css'

const Header = withRouter(({ history }) =>
  <div className="header">
    <div className="headerText" onClick={() => { history.push('/') }}>
      <img src={tedLogo} className="tedLogo" alt="logo" />
      <div className="subtitle">Dataset worth analyzing</div>
    </div>
    <ul className="headerButtons">
      <li className="item"><Link to='/'>Home</Link></li>
      <li className="item"><Link to='/tags'>Tags</Link></li>
      <li className="item"><Link to='/transcripts'>Transcripts</Link></li>
      <li className="item"><Link to='/notebook'>Notebook</Link></li>
    </ul>
  </div>);

export default Header;