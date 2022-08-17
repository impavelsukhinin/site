import { ExternalLink, Tags } from './components'
import { CONTACT_LINKS, INFO } from './constants'
import { GlobalStyle, Contacts, About, Who, Location } from './styles'

export const App = () => (
  <>
    <GlobalStyle />

    <About>
      {INFO.who}
      <Who>
        {INFO.position} at&nbsp;
        <ExternalLink href={INFO.job.href}>{INFO.job.title}</ExternalLink>
      </Who>
      <Location>📍&nbsp;{INFO.location}</Location>
    </About>
    <Contacts>
      {CONTACT_LINKS.map(({ title, href }) => (
        <ExternalLink href={href} key={href}>
          {title}
        </ExternalLink>
      ))}
    </Contacts>

    <Tags />
  </>
)
