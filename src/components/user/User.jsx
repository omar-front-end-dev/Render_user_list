import  propTypes  from "prop-types"
import { Link } from "react-router-dom"



export function User( { user } ) {


    let fullName = `${user.firstName}  ${user.lastName}`

  return (
        <tr>
            <td className="py-3 text-center">{user.id}</td>
            <td className="py-3 text-capitalize">{fullName}</td>
            <td className="py-3">{user.email}</td>
            <td className="py-3 text-center">
                <Link className="btn btn-primary" to={"single_user"} onClick={() =>localStorage.setItem("userId", user.id)} userId={user.id}>
                    Show User
                </Link>
            </td>
        </tr>
  )
}


User.propTypes = {
    user: propTypes.object,
}