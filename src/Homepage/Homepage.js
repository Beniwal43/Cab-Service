import React from 'react'
import Mainpage from './components/Home/Mainpage';
import Middle from './components/Home/Middle';
import Middlepage from './components/Home/Middlepage';
import Foodpage from './components/Home/Foodpage';
import Safetypage from './components/Home/Safetypage';

function Homepage() {
  return (
    <React.Fragment>
        <Mainpage />
        <Middle />
        <Middlepage />
        <Foodpage />
        <Safetypage />
  </React.Fragment>
  )
}

export default Homepage