import React,{useState} from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom';

function CreateUser(props) {

  let [firstname, setFName] = useState("");
  let [lastname, setLName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile,setMobile]= useState("")
  let [dob,setDob]= useState("")
  let [location,setLocation]= useState("")

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
    user.push(data)
    props.data.setUser(user)
    navigate('/dashboard')
  }
  return (
      <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First name"onChange={(e)=>setFName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name"onChange={(e)=>setLName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"onChange={(e)=>setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>mobile</Form.Label>
            <Form.Control type="text" placeholder="Enter mobile number"onChange={(e)=>setMobile(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>DOB</Form.Label>
            <Form.Control type="date" placeholder="Enter DOB"onChange={(e)=>setDob(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>location</Form.Label>
            <Form.Control type="text" placeholder="Enter location"onChange={(e)=>setLocation(e.target.value)} />
          </Form.Group>

          <Button variant="primary" onClick={()=>handleSubmit()}>
            Submit
          </Button> 
        </Form>
      </div>
  );
}

export default CreateUser