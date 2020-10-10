import React from 'react'
import TopNavigation from './TopNavigation'
import CvMain from './CvMain'
import Fog from './Fog'
import Footer from './Footer'

const CvPage = () => {
    return (
        <div>
            <div id="page-wrapper">
                <TopNavigation />
                <CvMain />
                <Fog />
                <Footer />
            </div>
        </div>
    )
}

export default CvPage