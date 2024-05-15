"use client";
import Axios from "axios";
import React, { useState } from "react";

const UploadImageComponent = ({ setter }) => {
  const [data, setData] = useState({
    selectedFile: "",
    responseArray: "",
    loading: false,
  });
  const [imgUrl, setImgUrl] = useState("");
  const handleInputChange = (event) => {
    console.log("event", event.target.files);
    setData({ ...data, loading: true });
    const [imgData] = event.target.files;
    const info = new FormData();
    info.append("file", imgData);
    Axios.post(`http://localhost:3001/uploadImage/`, info, {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    }).then(({ data }) => {
      console.log("imageData", data);
      setData({ ...data, responseArray: data, loading: false });
      setImgUrl(data[0].url);
      resetFile();
      setter(data[0].url);
    });
  };
  function resetFile() {
    document.getElementsByName("file").value = null;
  }

  return (
    <>
      <input type="file" required onChange={handleInputChange} />
      {imgUrl && (
        <img
          style={{
            width: "250px",
            height: "175px",
            borderRadius: "10px",
          }}
          decoding="async"
          src={imgUrl}
        />
      )}
    </>
  );
};

export default UploadImageComponent;
