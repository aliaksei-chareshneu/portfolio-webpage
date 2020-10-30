import React, { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import projects from '../data/projects'
import ProjectItem from './ProjectItem'

const LandingMain = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const maxHeight = [...containerRef.current.children].reduce((a, b) => a.offsetHeight > b.offsetHeight ? a : b).offsetHeight;
    [...containerRef.current.children].forEach(e => e.children[0].style.minHeight = `${maxHeight}px`);
  }, [])

  const projectItems = projects.map(p => {
    return <ProjectItem
      key={p.name}
      link={p.link}
      name={p.name}
      logoFile={p.logo.filename}
      logoBgColor={p.logo.bgColor}
      title={p.title}
      shortDescription={p.shortDescription}
      technologies={p.technologies}
    />
  })
  // 1. Determine child node with max height (reduce)
  // 2. Onmount, Loop/map/forEach to set height of each child node to max height

  return (
    <main id="main-content">
      <Container style={{ zIndex: "2" }} ref={containerRef}>
        {projectItems}
        
      </Container>
    </main>
  )
}

export default LandingMain