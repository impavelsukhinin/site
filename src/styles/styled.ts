import styled from 'styled-components'

import { ZINDEX } from '../constants'

export const Contacts = styled.div`
  font-family: 'Muller', Helvetica, Arial, Times, system-ui;

  position: absolute;
  z-index: ${ZINDEX.info};
  font-size: 1.2rem;
  bottom: 30px;
  left: 30px;
`

export const About = styled.div`
  font-family: 'Muller', Helvetica, Arial, Times, system-ui;
  font-size: 3rem;
  z-index: ${ZINDEX.info};
  text-align: center;
  margin: 0 auto;
`

export const Who = styled.div`
  font-size: 2rem;
`

export const Location = styled.address`
  font-size: 1.2rem;
  font-style: normal;

  position: absolute;
  z-index: ${ZINDEX.info};
  bottom: 30px;
  right: 30px;
`
