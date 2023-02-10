import Webcam from "react-webcam";
import { useRef, useState ,useEffect, React} from "react";
import axios from "axios";
// import { Cloudinary } from "@cloudinary/url-gen";
// import { Effect } from "@cloudinary/url-gen/actions/effect";
let cloudName = "YOUR_CLOUDINARY_CLOUD_NAME_HERE";
// const cld = new Cloudinary({
//         cloud: {
//             cloudName,
//         },
//     });
function VideoSnippet(props) {
  // useEffect(() => {
  //   setTimeout(()=> {
  //     captureAndUpload();
  //   }, 3*1000);
  // });


  //Calling at two times rate - Yet to fix
  setInterval(()=> { captureAndUpload();}, 1000 * 60 * 6);
  const url ="http://localhost:8000/register";
  const client = axios.create({
    baseURL: url 
  });
  const constraints = {
      width: 700,
      height: 550,
      facingMode: "user",
      aspectRatio: 9 / 16,
    };
    const camRef = useRef();
    const [loading, setLoading] = useState(false);
    const [fid, setId] = useState("");
    const [prevURL, setPrevURL] = useState("");
    const captureAndUpload = async () => {
    // get screenshot
    const data = camRef.current.getScreenshot();
    // upload to cloudinary and get public_id
     try {
       setLoading(true);
       const imageData = new FormData();
       imageData.append("file", data);
  //       console.log(imageData);
      
        // Add your upload preset here
       imageData.append("upload_preset", "YOUR_CLOUDINARY_UPLOAD_PRESET_HERE");
       const res = await axios.post(
     ` https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
       imageData
       );
       const imageDetails = res.data;
       setId(imageDetails.public_id);
       await setPrevURL(imageDetails.url);
       console.log(prevURL);
      //  console.log(props.uid);
       client.put('',{
        id:props.uid,
        img_url:res.data.url
      }).then((res)=>{
          // console.log("success capture");
          // console.log(res);
      })
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
     }
   }
     return (
       <section className="main">
         <article className="media_box">
           <Webcam
             // this will be used internally to bind some useful methods to the ref variable.
             ref={camRef}
             videoConstraints={constraints}
             //this specifies the file format we want for the captured
             screenshotFormat="image/jpeg"
           />
           {/* this button will be used to capture the image*/}
           <button
             disabled={loading} 
             className="capture_btn"
             onClick={captureAndUpload}
             
           >Capture</button>
         </article>
       </section>
     );
}


export default VideoSnippet;