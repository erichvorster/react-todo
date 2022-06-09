import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-lightBlue rounded-2xl py-3 px-12'>{props.text}</button>
  )
}

export default Button