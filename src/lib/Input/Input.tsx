import React from 'react'
import './input.css'

interface props {
  [key: string]: any
}

export default function Input (props: props) {
  function isItUsable () {
    const { type, className, ...restProps } = props
    return restProps
  }

  return (
    <input className={`${props.className} yefee-input`} type={props.type ? props.type : 'text'} {...isItUsable()} />
  )
}
