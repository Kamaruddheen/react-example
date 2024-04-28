import React, { useState, useEffect, memo } from "react";

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Photo Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <PhotoItem
            key={photo.id}
            photo={photo}
            handlePhotoClick={handlePhotoClick}
          />
        ))}
      </div>

      {/* Display the selected photo in a modal */}
      {selectedPhoto && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setSelectedPhoto(null)} // Close the modal on click outside
        >
          <div className="bg-white p-4 rounded-lg shadow-lg relative">
            <img
              src={selectedPhoto.download_url}
              alt={selectedPhoto.author}
              className="w-full h-auto max-h-96"
            />

            <span
              className="absolute top-2 right-2 text-white cursor-pointer"
              onClick={() => setSelectedPhoto(null)} // Close the modal
              aria-label="Close"
            >
              &times;
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
