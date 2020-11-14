import React from 'react'
import TopNavigation from './TopNavigation'
import IndividualProjectMain from './IndividualProjectMain'
import Fog from './Fog'
import Footer from './Footer'
import { useParams } from 'react-router-dom'

const IndividualProjectPage = () => {
    const { id } = useParams()

    return (
        <div id="page-wrapper">
            <TopNavigation />
            <IndividualProjectMain id = {id}/>
            <Fog />
            <Footer />
        </div>
    )
}

export default IndividualProjectPage