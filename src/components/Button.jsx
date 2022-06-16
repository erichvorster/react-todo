import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-lightBlue text-textDark text-sm w-44 h-10 border border-textLight rounded-lg py-2 px-6 hover:shadow'>{props.text}</button>
  )
}

export default Button