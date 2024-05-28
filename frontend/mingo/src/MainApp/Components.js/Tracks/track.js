import React from 'react';
import './trackDetails.css';
import poster from "../../media/mic.jpg";


const TrackDetails = () => {
    return (
        <div className="track-details-container">
            <div className="track-details-header">
                <h2 className="track-title">Title</h2>
                <p className="track-artist">by Artist Name</p>
            </div>
            <div className="track-details-body">
                <div className="track-info">
                    <p><strong>Album:</strong> Album Name</p>
                    <p><strong>Genre:</strong> Genre</p>
                    <p><strong>Duration:</strong>  04:32</p>
                    <p><strong>Release Date:</strong> 05-08-2024</p>
                </div>
                {/* <div className="track-files">
                    <h3>Track Files</h3>
                    {track.fileUrl.map((file, index) => (
                        <div key={index} className="file-item">
                            <a href={file.url} target="_blank" rel="noopener noreferrer">
                                File {index + 1}
                            </a>
                        </div>
                    ))} */}
                </div>
                <div className="track-thumbnail">
                    <h3>Thumbnail</h3>
                        <img  src= {poster} alt={`Thumbnail`} className="thumbnail-image" />
                    
                </div>
                <div className="track-copyright">
                    <p><strong>Copyright Owner:</strong> Owner Name</p>
                    <p><strong>Registration Date:</strong> Registration Date</p>
                    <p><strong>Registration Number:</strong> Registration Number</p>
                </div>
                <div className="track-royalties">
                    <h3>Royalties</h3>
                    
                        <p ><strong>Recipient Name:</strong> Percentage%</p>
                   
                </div>
                <div className="track-usage-rights">
                    <h3>Usage Rights</h3>
                    
                        <p > Rights reserved</p>
                    
                </div>
                <div className="track-blockchain">
                    <h3>Blockchain Data</h3>
                    <p><strong>Token:</strong> Blockchain Token</p>
                    <p><strong>Smart Contracts:</strong> Smart Contracts</p>
                </div>
                <div className="track-stats">
                    <p><strong>Listens:</strong> 4,00,485</p>
                    <p><strong>Sales:</strong> 5423 at $ 60</p>
                </div>
            </div>
        
    );
}

export default TrackDetails;
