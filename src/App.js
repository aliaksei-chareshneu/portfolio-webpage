import React from 'react'
import {Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import ProjectsPage from './components/ProjectsPage'
import CvPage from './components/CvPage'
import Error from './components/Error'

const App = () => {
    return (
        // <div className="min-vh-100">
        <Switch>
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