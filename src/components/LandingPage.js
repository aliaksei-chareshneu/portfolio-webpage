import React from 'react'
import TopNavigation from './TopNavigation'
import LandingMain from './LandingMain'
import Fog from './Fog'
import Footer from './Footer'

const LandingPage = () => {
    return (
        <div id="page-wrapper">
            <TopNavigation />
            <LandingMain />
            <Fog />
            <Footer />
        </div>
    )
}

export default LandingPage