import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Intro from './Intro'
import Tags from './Tags'
import Transcripts from './Transcripts'
import Notebook from './Notebook'

const Main = () =>
  <main>
    <Switch>
      <Route exact path='/' component={Intro}/>
      <Route path='/tags' component={Tags}/>
      <Route path='/transcripts' component={Transcripts}/>
      <Route path='/notebook' component={Notebook}/>
    </Switch>
  </main>;

export default Main;
