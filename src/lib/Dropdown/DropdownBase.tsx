import React from 'react'
import './dropdown.css'

interface props {
  children: any
  className?: string
  [key: string]: any
}

export default function DropdownBase (props: props) {
  function isItUsable () {
    const { children, className, ...restProps } = props
    return restProps
  }

  return (
    <div className={`yefee-dropdown-base ${props.className ? props.className : ''}`} {...isItUsable()}>
      {props.children}
    </div>
  )
}
