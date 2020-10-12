import React from 'react'
import TopNavigation from './TopNavigation'
import NachrdbProjectMain from './NachrdbProjectMain'
import Fog from './Fog'
import Footer from './Footer'

const NachrdbProjectPage = () => {
    return (
        <div id="page-wrapper">
            <TopNavigation />
            <NachrdbProjectMain />
            <Fog />
            <Footer />
        </div>
    )
}

export default NachrdbProjectPage