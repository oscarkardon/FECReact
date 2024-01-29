import React from "react"

export default function Input(){
    const [formData, setFormData] = React.useState({name: ""})

    function handleChange(event){
        setFormData(event.target.value)
    }

    return(
        <input 
            type="text"
            placeholder="Enter the Name of the Person You Want to Search"
            onChange={handleChange}
            name="name"
            value={formData.name}
        />
    )
}