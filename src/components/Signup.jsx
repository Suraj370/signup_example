import { useState } from "react"

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''

    })

    const onSubmit = () =>{
        alert(JSON.stringify(formData))
    }

  return (
    <form onSubmit={onSubmit} >
        <label>
            First Name
            <input onChange={(e) => {
                setFormData({
                    ...formData,
                    firstName: e.target.value
                })
            }} />
         
        </label>
        <label>
        Last Name
            <input onChange={(e) => {
                setFormData({
                    ...formData,
                    lastName: e.target.value
                })
            }} />
        </label>
        <label>
        Email
            <input onChange={(e) => {
                setFormData({
                    ...formData,
                    email: e.target.value
                })
            }} />
        </label>
        <input type="submit" />
    </form>
  )
}

export default Signup