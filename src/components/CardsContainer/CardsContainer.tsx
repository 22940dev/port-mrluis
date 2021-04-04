// React Router
// import { Switch, Route } from "react-router-dom"

// Custom Hooks
import { useLoader } from '../../hooks/useLoader'

// Components
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Services from '../Services/Services'

export default function CardsContainer(): JSX.Element {
  const loader = useLoader()

  return (
    <div className='Cards-container'>
      {loader ? (
        <div className='loader'>Loading...</div>
      ) : (
        <>
          <Skills />
          <Projects />
          <Services />
        </>
      )}
    </div>
  )
}
