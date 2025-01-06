import React, { useRef } from 'react';

const FileUpload: React.FC = () => {
  // Specify the type of the ref as HTMLInputElement
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Specify the type of the event parameter
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Use optional chaining
    if (file) {
      console.log('Selected file:', file.name);
      // You can also read the file or perform other actions here
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        <img width="25px" height="15px" src={require('../../icons/upload.svg').default} alt="Upload File (csv)" />
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }} // Hide the file input
      />
    </div>
  );
};

export default FileUpload;
