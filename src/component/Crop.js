import React, { useState } from "react";
import ReactCrop from 'react-image-crop';

import 'react-image-crop/dist/ReactCrop.css';
const Crop=()=>{

  const [src,setFile]=useState(null);
  handelFile=(e)=>{
    setFile(URL.createObjectURL(e.target.files[0]));
    }
    const [image,setImage]=useState(null);
    const [crop, setCrop] = useState({ aspect: 16 / 9 });
    const [result,setResult]=useState(null);
       getCroppedImg=()=> {
      const canvas = document.createElement('canvas');
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext('2d');
     
      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height,
      );
      const base64Image = canvas.toDataURL('image/jpeg');
      setResult(base64Image)
      }
     
return(<div>
   <h1>My own croping app</h1>
<input type='file' accept="image/*" onChange={handelFile}/>
 {src &&  <ReactCrop src={src} onImageLoaded={setImage} crop={crop} onChange={setCrop}/>

}<br/><br/>
 <button onClick={getCroppedImg}>Crop image</button>
 {result&&<div>
   <img src={result} />
 </div>
}
 
  </div>

  )

} 
export default Crop;
