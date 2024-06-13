import axios from 'axios'
import React, { useState } from 'react'

const BlogRegistration = () => {
    const [data,setdata] = useState({
        "name":"",
        "email":"",
        "password":""
    })

    const inputHANDLER = (event) => {
        setdata({...data,[event.target.name]:event.target.value})
    }

    const readData = () => {
        axios.post("http://localhost:8080/signup",data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "Success") {
                    alert("Registration Successful")
                } else {
                    alert("Error")
                }
            }
        ).catch(
            (error) => {
                alert("Error")
            }
        ).finally()
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">
                                Name
                            </label>
                            <input type="text" className="form-control" name="name" value={data.name} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">
                                Email ID
                            </label>
                            <input type="text" className="form-control" name="email" value={data.email} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">
                                Password
                            </label>
                            <input type="password" id="" className="form-control" name="password" value={data.password} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readData}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogRegistration