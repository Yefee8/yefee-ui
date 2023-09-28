import React, { useEffect, useState } from 'react'
import './dialog.css'

interface props {
  color?: 'dark' | 'white';
  children?: any;
  show: boolean;
  [key: string]: any
}

export default function Dialog(props: props) {
  const [firstTime, setFirstTime] = useState(0)
  const [animationClass, setAnimationClass] = useState('dialog-none')

  function DialogAnimationClass() {
    if (props.show) {
      setAnimationClass('dialog-visible')
      if (firstTime !== 2) {
        setFirstTime(2)
      }
    } else {
      if (firstTime === 0) {
        setAnimationClass('dialog-none')
        setFirstTime(2)
      } else {
        setAnimationClass('dialog-invisible')
        setTimeout(() => {
          setAnimationClass('dialog-none')
        }, 300)
      }
    }
  }

  useEffect(() => {
    DialogAnimationClass()
  }, [props.show])

  function isItUsable() {
    const { color, children, className, ...restProps } = props
    return restProps
  }

  return (
    <div
      className={`${props.className} ${props.color ? props.color : 'dark'}-dialog yefee-dialog-base ${animationClass}`}
      {...isItUsable()}
    >
      {props.children}
    </div>
  )
}
