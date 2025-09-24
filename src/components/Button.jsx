import React from 'react'

const Button = ({children,isSelected,onSelect}) => {
  return (
    <li><button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button></li>
  )
}

export default Button
