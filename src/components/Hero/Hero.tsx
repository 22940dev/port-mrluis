import { BrowserRouter as Router } from 'react-router-dom'
// Assets
import heroIllustration from '../../assets/hero-illustration.svg'
// Utils
import { slideUp } from '../../utils/animateCss/animateCss'
import { linkedin, github } from '../../utils/social-links/socialLinks'

import {
  SHero,
  HeroIllustration,
  HeroPersonal,
  HeroPersonalGreet,
  HeroPersonalTitle,
  HeroPersonalName,
  HeroPersonalCodeIcon,
  HeroPersonalInfo,
  HeroLinks,
  HeroLinksLinkedin,
  HeroLinksGithub,
  HeroLinksAbout,
} from './Hero.styles'

export default function Hero(): JSX.Element {
  return (
    <Router>
      <SHero>
        <HeroIllustration src={heroIllustration} alt='hero-illustration' />
        <div className={`Hero__flex ${slideUp}`}>
          <HeroPersonal>
            <HeroPersonalTitle>
              <HeroPersonalGreet>Hello!</HeroPersonalGreet> I am{' '}
              <HeroPersonalName className='Hero__personal-name'>
                Luis Alvarez
              </HeroPersonalName>
              <span>
                <HeroPersonalCodeIcon className='fas fa-code' />
              </span>
            </HeroPersonalTitle>
            <HeroPersonalInfo className='Hero__personal-info'>
              <span>
                Frontend <span>Developer</span>
              </span>
              , specialized in
              <span id='Hero__personal-info-js'> Javascript</span> {'&'}{' '}
              <span>
                <span>React</span>
              </span>{' '}
              for UI
            </HeroPersonalInfo>
          </HeroPersonal>
          <HeroLinks>
            <HeroLinksLinkedin href={linkedin} target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-linkedin-in' />
            </HeroLinksLinkedin>
            <HeroLinksGithub href={github} target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-github' />
            </HeroLinksGithub>
            <HeroLinksAbout href='/#about'>
              <i className='fas fa-user' /> More About Me
            </HeroLinksAbout>
          </HeroLinks>
        </div>
      </SHero>
    </Router>
  )
}
