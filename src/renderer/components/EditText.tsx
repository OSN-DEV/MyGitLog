import React, { ReactNode } from 'react'
import BaseStyleProps from './BaseStyleProps'

interface EditTextProps extends BaseStyleProps {
  title: string,
  text: string
}

const EditText = (props: EditTextProps): ReactNode => {
  const {title, text} = props

  return (
    <div className='edit-text'>
      <label>
        <span>{title}</span>
        <input type="text" defaultValue={text}/>
      </label>
    </div>
  )
}

export default EditText
