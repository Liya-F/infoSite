import React from 'react'

const Title = ({text}) => {
  return (
    <div className="relative text-center">
        <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold text-primary mb-5 inline-block mt-8">
          {text}
        </h2>
        <span className="block w-20 h-1 bg-primary mx-auto mt-2 mb-8"></span>
      </div>
  )
}

export default Title