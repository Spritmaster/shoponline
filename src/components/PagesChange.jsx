import React from 'react'
import ControlPages from './ControlPages'

const PagesChange = () => {
  return (
    <div className='mt-16 flex justify-end '>
        <div className='join'>
        <ControlPages clas={''} text={'Prev'}/>
        <ControlPages clas={'border-none'} text={'1'}/>
        <ControlPages clas={'border-none'} text={'2'}/>
        <ControlPages clas={'border-none'} text={'3'}/>
        <ControlPages clas={''} text={'Next'}/>
        </div>
    </div>
  )
}

export default PagesChange