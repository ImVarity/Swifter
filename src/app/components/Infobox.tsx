import React from 'react'

type props = {
    name: string;
}

const Infobox = ({ name }: props) => {
  return (
    <div className='absolute top-10'>
        {name}
    </div>
  )
}

export default Infobox