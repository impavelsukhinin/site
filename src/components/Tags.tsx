import { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import { TAGS, ZINDEX } from '../constants'

const monokaiColors = ['#F92672', '#66D9EF', '#A6E22E', '#FD971F']

const Wrapper = styled.div`
  z-index: ${ZINDEX.tags};
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const InnerBlock = styled.div`
  position: absolute;
  width: 150%;
  left: -15px;
  top: -10px;
`

const appearance = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.15;
  }
`

const getRandomInteger = (min: number, max: number) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1)

  return Math.round(rand)
}

const Tag = styled.span<{ color?: string }>`
  color: ${({ color }) => color};
  opacity: 0.15;
  font-size: 21px;
  margin: 6px;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  display: inline-block;
  user-select: none;
  animation: ${appearance} 0.4s ease;
`

export const Tags = () => {
  const innerRef = useRef<HTMLDivElement>(null)
  const generating = useRef<boolean>(true)
  const [tags, setTags] = useState<{ tag: string; color: string }[]>([])

  const generateTags = () => {
    if (!innerRef.current) return

    const expectedHeight = document.body.clientHeight + 50
    const canDraw = innerRef.current.offsetHeight < expectedHeight

    if (!canDraw) {
      generating.current = false

      return
    }

    let time = 1
    const randomTags = [...TAGS].sort(() => Math.random() - 0.5)

    randomTags.forEach((item) => {
      setTimeout(
        (tag: string) => {
          setTags((prevTags) => [
            ...prevTags,
            { tag, color: monokaiColors[getRandomInteger(0, 3)] },
          ])
        },
        time,
        item,
      )

      time += 2
    })

    setTimeout(() => generateTags(), time)
  }

  useEffect(() => {
    const handleTagsGenerate = () => {
      if (!generating.current) {
        generateTags()
      }
    }

    generateTags()
    window.addEventListener('resize', handleTagsGenerate)

    return () => window.removeEventListener('resize', handleTagsGenerate)
  }, [])

  return (
    <Wrapper>
      <InnerBlock ref={innerRef}>
        {tags.map((item, index) => (
          <Tag key={index} color={item.color}>
            {item.tag}
          </Tag>
        ))}
      </InnerBlock>
    </Wrapper>
  )
}
