import React, { ReactNode } from 'react'
import BaseStyleProps from './BaseStyleProps'

interface EditTextProps extends BaseStyleProps {
  caption: string,
  onClick: (event:React.MouseEvent<HTMLButtonElement>) => void
}

const TextButton = (props: EditTextProps): ReactNode => {
  const {caption, onClick, styles} = props
  const styleList = [
    'cursor-pointer',
    styles ?? ''
  ]
  return (
    <span className={styleList.join(' ').trim()} onClick={onClick}>{caption}</span>
  )
}

export default TextButton
