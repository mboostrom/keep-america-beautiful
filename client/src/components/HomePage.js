import React from 'react'

import Cleanup from './Cleanup'
import EndLitter from './EndLitter'
import Footer from './footer'
import Header from './Header'
import LitterStudy from './LitterStudy'
import Partnering from './Partnering'
import Responsibility from './Responsibility'
import TakeAction from './TakeAction'

const HomePage = props => {

  return(
    <div>
      <Header />
      <LitterStudy />
      <EndLitter />
      <Responsibility />
      <Partnering />
      <Cleanup />
      <TakeAction />
      <Footer />
    </div>
  )
}

export default HomePage