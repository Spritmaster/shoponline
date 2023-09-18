import React from 'react'

const ControlPages = ({clas,text}) => {
  return (
    <div >
        <button className={`btn btn-xs sm:btn-md ${clas} join-item `}>{text}</button>
    </div>
  )
}

export default ControlPages