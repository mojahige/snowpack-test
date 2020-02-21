import React from '/web_modules/react.js'
import styled from '/web_modules/styled-components.js'

// 手間だなぁ
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface Prop {
  text: string
  level?: HeadingLevel
}

export const Heading: React.FC<Prop> = ({ text, level }) => {
  const name = level ? (`h${level}` as HeadingTag) : 'p'
  const Tag = styled[name]`
    background-color: black;
    color: white;
  `

  return <Tag>{text}</Tag>
}
