import React from 'react'

const ProductsSelect = ({labelname ,labelFor , name , selectId ,optionArr , formCtrl, labelClas ,selectClas}) => {
  return (
    <div className={`form-control ${formCtrl}`}>
        <label htmlFor={labelFor} className='label'>
          <span className={`label-text capitalize ${labelClas}`}>{labelname}</span>
        </label>
        <select name={name} id={selectId} className={`select select-bordered select-sm ${selectClas}`}>
            {optionArr.map((option)=>{
                return (
                    <option value={option} key={option}>{option}</option>
                )
            })}
        </select>
    </div>
  )
}

export default ProductsSelect