import React from 'react'

const Link = ({ to, text }) => {
  return (
    <a href={to} className="text-gray-300 hover:text-gray-100 px-3 py-2 text-sm font-medium h-full">
      {text}
    </a>
  )
}

export default Link