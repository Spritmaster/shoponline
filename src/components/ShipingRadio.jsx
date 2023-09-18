import React from 'react'

const ShipingRadio = ({labelname ,labelFor ,type, name ,InputId}) => {
  return (
    <div className='form-control items-center'>
   <label htmlFor={labelFor} className='label cursor-pointer'>
            <span className='label-text capitalize'>{labelname}</span>
        </label>
        <input type={type}  name={name} id={InputId} className='checkbox checkbox-primary checkbox-sm'/>
     
    </div>


  )
}

export default ShipingRadio