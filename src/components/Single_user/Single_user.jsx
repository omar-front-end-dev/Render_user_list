import axios from "axios";
import { useEffect, useState } from "react"
import './Single_user.css'
import noImage from '../../assets/images/No-image-found.jpg'



export function Single_user() {
  const [singleUser, setSingleUser] = useState({});
  let getIdFromLocalStorage = localStorage.getItem("userId")
  let baseUrl = `http://localhost:3000/users/${getIdFromLocalStorage}`

  useEffect(() =>{
    async function getSingleUser() {
      try {
        const response = await axios.get(baseUrl);
        setSingleUser({...response.data})
      } catch (error) {
        console.error(error);
      }
    }
    getSingleUser()
  }, [])


  return (
    <div className="py-5 single-user">
      <div className="d-flex justify-content-center">
        <div className="single-user__image border-primary overflow-hidden">
          <img src={singleUser.image ?? noImage}/>
        </div>
      </div>
      <div className="text-center">
        <h1 className=" text-danger"><strong className="text-primary">Name:</strong> {singleUser.firstName + " " + singleUser.lastName}</h1>
        <h1 className=" text-danger"><strong className="text-primary">Email:</strong> {singleUser.email}</h1>
        <h1 className=" text-danger"><strong className="text-primary">#ID:</strong> {singleUser.id}  </h1>
      </div>
    </div>
  )
}
