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
            <Route path="/projects/nachrdb" component={NachrdbProjectPage} />
            <Route path="/" component={LandingPage} exact />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/cv" component={CvPage} />
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