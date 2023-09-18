import React from 'react'

export const SearchProduct = ({labelname ,labelFor ,type, name ,InputId}) => {
  return (
    <div className='form-control '>
   <label htmlFor={labelFor} className='label cursor-pointer'>
            <span className='label-text capitalize'>{labelname}</span>
        </label>
        <input type={type}  name={name} id={InputId} className='input input-bordered input-sm'/>
     
    </div>
  )
}
