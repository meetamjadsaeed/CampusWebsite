import React from 'react'
import AnimatedText from 'react-animated-text-content';

const AnimatedContent = ({data}) => {
  return (
    <>
    <AnimatedText
  type="words" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="lights"
  interval={0.09}
  duration={0.9}
  tag="h1"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
  {data.name}
</AnimatedText>
    
    </>
  )
}

export default AnimatedContent