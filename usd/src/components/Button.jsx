import React from 'react'
import { Buttons } from './styled/Button.styled'

function Button(
    {
        type = 'button', 
        onClick, 
        children, 
        className, 
        variant = 'default', 
        size = 'medium', 
        disabled = false, 
        isLoading = false, 
        icon: Icon 
    }
) {

    const baseStyle = 'rounded font-semibold flex items-center justify-center gap-2'
    const styles = {
        default:'',
        primary:'',
        auth:''
    }

    const sizes = {
        small:'',
        medium: '',
        large: ''
    }


  return (
    <Buttons
    $type={type}
    $onClick={onClick}
    $className={`${baseStyle} ${styles[variant]} ${sizes[size]} ${className}`}
    $disabled={disabled || isLoading}
  >
    {isLoading ? 'Loading...' : <>
      {Icon && <Icon />}
      {children}
    </>}
  </Buttons>
  )
}

export default Button