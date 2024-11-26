import React from 'react'

const InputText = ({ name, placeholder }) => {
    return (
        <div className="input-container">
            <input type="text" name={name} placeholder={placeholder} className={`input-${name}`}/>
        </div>
    )
}

export default InputText