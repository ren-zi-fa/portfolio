import { IconBrandWhatsapp } from '@tabler/icons-react'
import React from 'react'

const IconWa = () => {
  return (
    <div className='fixed bottom-4 right-4 z-0 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300'>
    <a href='#'>
      <IconBrandWhatsapp stroke={1} />
    </a>
  </div>
  )
}

export default IconWa