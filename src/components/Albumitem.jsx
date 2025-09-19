import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'

const Albumitem = ({ image, name, desc, id }) => {
    const navigateToAlbum = useNavigate();
    return (
        <div onClick={() => navigateToAlbum(`/album/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
            <img className='rounded' src={image} alt={name}></img>
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
    
  )
}

export default Albumitem