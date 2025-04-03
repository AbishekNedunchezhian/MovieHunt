import notfound from "../assets/page-not-found.jpg"
import {Link} from "react-router-dom"
export const PageNotFound = () => {
  return (
    <div className="container">
      <img src={notfound} alt="" className="mx-5"/>
      <p className="py-4 px-5">
        <Link to="/" className="btn btn-danger">Goto Home Page</Link>
      </p>
    </div>
  )
}


