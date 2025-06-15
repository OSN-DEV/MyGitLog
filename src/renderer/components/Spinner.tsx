import React from 'react'
import Select from 'react-select'
import BaseStyleProps from './BaseStyleProps'

interface SpinnerOptions {
  value: string | number
  label: string
}
interface SpinnerProps extends BaseStyleProps {
  title: string
  options: SpinnerOptions[]
}

const Spinner = (props: SpinnerProps) => {
  const { title, options, styles } = props
  const styleList = ['w-[10em]', styles ?? '']
  return (
    <div className={styleList.join(' ').trim()}>
      <div>
        <span className="text-stone-300">{title}</span>
        <Select options={options} />
      </div>
    </div>
  )
}

export default Spinner
