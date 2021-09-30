import React, { FC, AnchorHTMLAttributes } from 'react'
import styled from 'styled-components'

const Link = styled.a`
  position: relative;
  color: #000;
  text-decoration: none;
  transition: color 0.2s;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: #000;
    transition: transform 0.3s;
  }

  &:hover {
    color: #e26336;
  }

  &:hover::after {
    transform: scale(0);
  }

  & + & {
    margin-left: 10px;
  }
`

export const ExternalLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  ...props
}) => (
  <Link target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </Link>
)
