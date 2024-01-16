import axios from "axios";
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap";
import { User } from "../components/user/User";
import { Form } from "react-bootstrap";

export function Home() {
    const [users, setUsers] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [filterData, setFilterData] = useState([]);
    const base_url = "http://localhost:3000/users";

    useEffect(() =>{
        async function getUser() {
            try {
              const response = await axios.get(base_url);
              setUsers([...response.data])
              setFilterData([...response.data])
            } catch (error) {
              console.error(error);
            }
          }
          getUser()
        }, [])


    

   const inputValueHandler = (e) =>{
       setInputValue(e.target.value);
       if (inputValue.trim() == "") {
        setUsers([...users])
        } else{
        let newUsers = filterData.filter(item => {
            return item.firstName.toLowerCase().includes(inputValue.toLowerCase());
        });
        setUsers([...newUsers]);
    }
       
   }

    const searchSubmitHandler = (e) =>{
        e.preventDefault()
       
    }


  return (
    <div className="users-lists my-5 overflow-auto">
        <Form onSubmit={searchSubmitHandler} className="w-100  my-3 d-flex">
            <input value={inputValue} onChange={inputValueHandler} className="p-2 form-control rounded-end-0" type="text" placeholder="Search By Name"/>
            <button className="btn btn-primary border-start-0 rounded-start-0" type="submit">Search</button>
        </Form>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr className=" text-center">
                <th>#ID</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) =>{
                       return <User key={user.id} user={user} />
                    })
                }
            </tbody>
        </Table>
    </div>
  )
}
