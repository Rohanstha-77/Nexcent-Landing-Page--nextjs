import React from 'react'
type ButtonProps={
    type:'button' | 'submit'; 
    title: string;
    varient: string;
  }
const Button = ({type,title,varient}:ButtonProps) => {
  return (
    <>
        <button type={type} className={`flexCenter gap-3 ${varient}`}>
        <label className="bold-16 whitespace-nowrap">{title}</label>
      </button>
    </>
  )
}

export default Button