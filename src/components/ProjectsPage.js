import React from 'react'
import TopNavigation from './TopNavigation'
import ProjectsMain from './ProjectsMain'
import Fog from './Fog'
import Footer from './Footer'

const ProjectsPage = () => {
    return (
        <div id="page-wrapper">
            <TopNavigation />
            <ProjectsMain />
            <Fog />
            <Footer />
        </div>
    )
}

export default ProjectsPage