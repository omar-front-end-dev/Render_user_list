import { useState } from "react"



export function Login() {
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
  })

  const operationHandler = (e) =>{
      setLoginData({
        ...loginData,
        [e.target.name] : e.target.value
      })
  }

  const submitHandler = (e) =>{
    e.preventDefault()
    const allData = {...loginData}
    setLoginData({
      name: "",
      email: "",
    });
    localStorageHandler("user", allData)
  }

  const localStorageHandler = (value, data) =>{
    localStorage.setItem(`${value}`, JSON.stringify(data))
  }

  

  return (
   <>
      <form onSubmit={submitHandler} className="w-75 mx-auto p-5 form-control mt-5">
        <div className="mb-3">
          <label  className="form-label">Name</label>
          <input onChange={operationHandler} value={loginData.name} type="text" className="form-control" placeholder="Name" name="name" />
        </div>
        <div className="mb-3">
          <label  className="form-label">Email address</label>
          <input onChange={operationHandler} value={loginData.email} type="email" className="form-control" placeholder="Email" name="email"/>
        </div>
        <button className="btn btn-primary d-block w-100 mt-4">Submit</button>
      </form>
   </>
  )
}
