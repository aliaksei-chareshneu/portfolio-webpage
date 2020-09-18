import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import TopNavigation from './components/TopNavigation'

const App = () => {
    return (
        <div>
            <TopNavigation />
            <Jumbotron>
                <h1>Hi there! I'm Aliaksei, web developer, PhD student in bioinformatics, freelancer, researcher, musician, and a storyteller.
                    I like to help people out, and I firmly believe that good does always triumph over evil.
                </h1>
            </Jumbotron>
            <Container>
                Container
            </Container>
            <footer>
                <small>&copy; 2020 - Aliaksei Chareshneu. All rights reserved.</small>
            </footer>
        </div>
    )
}

export default App