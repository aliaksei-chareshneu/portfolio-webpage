import React from 'react'
import {Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import ProjectsPage from './components/ProjectsPage'
import CvPage from './components/CvPage'
import NachrdbProjectPage from './components/NachrdbProjectPage'
import Error from './components/Error'

const App = () => {
    return (
        // <div className="min-vh-100">
        <Switch>
            <Route path="/portfolio-webpage/projects/nachrdb" component={NachrdbProjectPage} />
            <Route path="/portfolio-webpage" component={LandingPage} exact />
            <Route path="/portfolio-webpage/projects" component={ProjectsPage} />
            <Route path="/portfolio-webpage/cv" component={CvPage} />
            <Route component={Error} />
        </Switch>
        // TODO: Implement L, W, C components
            // <TopNavigation />
            // <LandingMain />
            // <Fog />
            // <Footer />
        // </div>
    )
}

export default App