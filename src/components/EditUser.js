import {React,useState} from 'react'
import { useNavigate } from "react-router-dom";
import {useParams} from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import {useSearchParams} from 'react-router-dom'
function EditUser(props) {
    let params=useParams();
  let [firstname, setFName] = useState(props.data.user[params.id].firstname)
  let [lastname, setLName] = useState(props.data.user[params.id].lastname)
  let [email, setEmail] = useState(props.data.user[params.id].email)
  let [mobile, setMobile] = useState(props.data.user[params.id].mobile)
  let [dob, setDob] = useState(props.data.user[params.id].dob)
  let [location, setLocation] = useState(props.data.user[params.id].location);

  let navigate=useNavigate()
  let handleSubmit =()=>{

    let data = {
      firstname,
      lastname,
      email,
      mobile,
      dob,
      location
    }
    let user= [...props.data.user]
    user.splice(params.id,1,data)
    
    props.data.setUser(user)
    navigate('/dashboard')
  }
  return (
      <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First name" value={firstname}onChange={(e)=>setFName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name"value={lastname}onChange={(e)=>setLName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"value={email}onChange={(e)=>setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>mobile</Form.Label>
            <Form.Control type="text" placeholder="Enter mobile number"value={mobile}onChange={(e)=>setMobile(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>DOB</Form.Label>
            <Form.Control type="date" placeholder="Enter DOB"value={dob}onChange={(e)=>setDob(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>location</Form.Label>
            <Form.Control type="text" placeholder="Enter location"value={location}onChange={(e)=>setLocation(e.target.value)} />
          </Form.Group>

          <Button variant="primary" onClick={()=>handleSubmit()}>
            Submit
          </Button> 
        </Form>
      </div>
  )
}   

export default EditUser