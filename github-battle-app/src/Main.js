import BattleContainer from "./BattleContainer";
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import PopularContainer from "./Popular";

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/battle' component={BattleContainer}/>
      <Route path='/popular' component={PopularContainer}/>
    </Switch>
  </main>
)

export default Main;