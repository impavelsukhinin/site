import React from 'react'

import { ExternalLink, Tags } from './components'
import { CONTACT_LINKS, INFO } from './constants'
import { GlobalStyle, Contacts, About, Who } from './styles'

export const App = () => (
  <>
    <GlobalStyle />
    <Tags />

    <About>
      {INFO.who}
      <Who>
        {INFO.position} at&nbsp;
        <ExternalLink href={INFO.where.href}>{INFO.where.title}</ExternalLink>
      </Who>
    </About>
    <Contacts>
      {CONTACT_LINKS.map(({ title, href }) => (
        <ExternalLink href={href} key={href}>
          {title}
        </ExternalLink>
      ))}
    </Contacts>
  </>
)
