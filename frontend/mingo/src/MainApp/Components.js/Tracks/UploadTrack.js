import React , {useState} from "react";
import axios from "axios";
import "./Upload.css";

const UploadTrack = ()=>{

 
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    album: '',
    genre: '',
    duration: '',
    releaseDate: '',
    copyright: '',
    royalties: '',
    usageRights: '',
    blockchainData: '',
    listens: 0,
    salesQuantity: 0,
    salesPrice: 0,
    uploadedBy: '',
  });
  const [file, setFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('artist', formData.artist);
    data.append('album', formData.album);
    data.append('genre', formData.genre);
    data.append('duration', formData.duration);
    data.append('releaseDate', formData.releaseDate);
    data.append('file', file);
    data.append('thumbnail', thumbnail);
    data.append('copyright', formData.copyright);
    data.append('royalties', formData.royalties);
    data.append('usageRights', formData.usageRights);
    data.append('blockchainData', formData.blockchainData);
    data.append('listens', formData.listens);
    data.append('salesQuantity', formData.salesQuantity);
    data.append('salesPrice', formData.salesPrice);
    data.append('uploadedBy', formData.uploadedBy);

    try {
      const response = await axios.post('http://localhost:5000/uploadTrack', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
   <div className="FormMain">
     <form onSubmit={handleSubmit} className="UploadForm">
      <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
      <input type="text" name="artist" placeholder="Artist" onChange={handleChange} required />
      <input type="text" name="album" placeholder="Album" onChange={handleChange} required />
      <input type="text" name="genre" placeholder="Genre (comma separated)" onChange={handleChange} required />
      <input type="number" name="duration" placeholder="Duration" onChange={handleChange} required />
      <input type="date" name="releaseDate" placeholder="Release Date" onChange={handleChange} required />
      <input type="file" name="file" onChange={handleFileChange} required />
      <input type="file" name="thumbnail" onChange={handleThumbnailChange} required />
      <input type="text" name="copyright" placeholder="Copyright" onChange={handleChange} required />
      <textarea name="royalties" placeholder="Royalties (JSON format)" onChange={handleChange} required />
      <input type="text" name="usageRights" placeholder="Usage Rights (comma separated)" onChange={handleChange} required />
      <textarea name="blockchainData" placeholder="Blockchain Data (JSON format)" onChange={handleChange} required />
      <input type="number" name="listens" placeholder="Listens" onChange={handleChange} />
      <input type="number" name="salesQuantity" placeholder="Sales Quantity" onChange={handleChange} />
      <input type="number" name="salesPrice" placeholder="Sales Price" onChange={handleChange} />
      <input type="text" name="uploadedBy" placeholder="Uploaded By (User ID)" onChange={handleChange} required />
      <button type="submit">Upload Track</button>
    </form>
   </div>
  );
};





export default UploadTrack;