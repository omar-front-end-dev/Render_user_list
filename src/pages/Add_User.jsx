import axios from "axios";
import { useState } from "react";
import { Form } from "react-bootstrap";

export function Add_User() {
  const [addUser, setAddUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const inputsOperationValue =(e) =>{
    setAddUser({
      ...addUser,
      [e.target.name] : e.target.value
    })
  }


  const submitHandler = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3000/users', {
      ...addUser
    })
    setAddUser({
      firstName: "",
      lastName: "",
      email: "",
    })
  }


  return (
  <>
    <h1 className="text-center py-3">Add User</h1> 
    <Form onSubmit={submitHandler} className="p-3 mt-5">
      <div className="row mb-3">
       <div className="col-lg-6">
         <input name="firstName" onChange={inputsOperationValue} value={addUser.firstName} className="p-3 mb-3 mb-lg-0 form-control" type="text" placeholder="Add First Name" required/>
       </div>
       <div className="col-lg-6">
          <input name="lastName" onChange={inputsOperationValue } value={addUser.lastName} className="p-3 form-control" type="text" placeholder="Add Last Name" required/>
       </div>
      </div>
      <div className="row">
        <div className="col">
        <input name="email" onChange={inputsOperationValue } value={addUser.email} className="p-3 form-control" type="text" placeholder="Add Email" required />
        </div>
      </div>
      <button className="btn btn-primary w-100 mt-3" type="submit">Add User</button>
    </Form>
  </>
  )
}
