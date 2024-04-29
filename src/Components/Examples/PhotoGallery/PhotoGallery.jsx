import React, { useState, useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa";

const PhotoItem = ({ photo, handlePhotoClick }) => (
  <div
    onClick={() => handlePhotoClick(photo)}
    className="relative rounded-lg overflow-hidden cursor-pointer shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
  >
    <img
      src={photo.download_url}
      alt={photo.author}
      className="w-full h-auto"
    />
    <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white font-semibold">
      {photo.author}
    </div>
  </div>
);

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);
  const downloadLinkRef = useRef(null); // Ref for the download link

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("https://picsum.photos/v2/list?limit=10");
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchPhotos();
  }, []);

  // Function to handle photo click and set the selected photo
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const downloadPhoto = (url, author) => {
    // Set the href and download attributes of the link ref
    downloadLinkRef.current.href = url;
    downloadLinkRef.current.download = `${author}-${Date.now()}.jpg`;

    // Programmatically trigger a click on the link
    downloadLinkRef.current.click();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Photo Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative rounded-lg overflow-hidden cursor-pointer shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={photo.download_url}
              alt={photo.author}
              className="w-full h-auto"
              onClick={() => handlePhotoClick(photo)}
            />

            <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white font-semibold">
              {photo.author}
            </div>

            <button
              onClick={() => downloadPhoto(photo.download_url, "image")}
              className="absolute top-2 right-2 p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
            >
              <FaDownload />
            </button>
          </div>
        ))}
      </div>

      {/* Invisible download link */}
      <a ref={downloadLinkRef} style={{ display: "none" }} />

      {/* ... rest of your code ... */}
    </div>
  );
};

export default PhotoGallery;
