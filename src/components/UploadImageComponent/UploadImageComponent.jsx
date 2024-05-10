"use client";
import Axios from "axios";
import React, { useState } from "react";

const UploadImageComponent = () => {
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
    });
  };
  function resetFile() {
    // Reset file input control
    document.getElementsByName("file").value = null;
  }
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginTop: "25px" }}>
        <input type="file" onChange={handleInputChange} />
        {imgUrl && <img decoding="async" src={imgUrl} />}
      </div>
    </div>
  );
};

export default UploadImageComponent;
