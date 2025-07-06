import React, { ReactNode } from 'react'
import BaseStyleProps from './BaseStyleProps'

interface EditTextProps extends BaseStyleProps {
  title: string,
  text: string,
  name: string,
}

const EditText = (props: EditTextProps): ReactNode => {
  const {title, text, name} = props

  return (
    <div className='edit-text'>
      <label>
        <span>{title}</span>
        <input type="hidden" name={`title-${name}`} defaultValue={title}/>
        <input type="text" name={name} defaultValue={text}/>
      </label>
    </div>
  )
}

export default EditText
