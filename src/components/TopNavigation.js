import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'

const TopNavigation = () => {
    return (
        <header id="page-header">
            {/* Here could be a logo or a search bar, not inside nav element */}
            <Navbar collapseOnSelect sticky="top" expand="md" variant="dark">
            <Navbar.Toggle aria-controls="topNavbar" />
            <Navbar.Collapse id="topNavbar">
                <Nav className="mr-auto mt-2 mt-lg-0 font-weight-bold">
                    {/* In case something breaks, try "react router boostrap" instead */}
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/cv">CV</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </header>
        
    )
}

export default TopNavigation

