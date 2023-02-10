import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import ImgTab from './ImgTab';
import axios from "axios";

function Admin() {
    const [data,setData]=useState([]);
    const fetchData = () => {
        return axios.get("http://localhost:8000/register")
              .then(
                (response) => {
                    setData(response.data);
                    document.getElementById("user_button").style.display="none";
                }
        );
      }
      console.log(data);
  return (
    <>
    <div>
        <button type="button" id='user_button' onClick={fetchData} className="btn btn-primary">
            Get User Data...
        </button>
    </div>
    <ol>
        {data.map(idx =>(
            <li key={idx._id}>
                <a href={"https://localhost:8000/register/images/"+idx._id}>View Details for Name : {idx.name} & Email : {idx.email}</a>
                </li>
        ))}
    </ol>
    </>
  )
}

export default Admin