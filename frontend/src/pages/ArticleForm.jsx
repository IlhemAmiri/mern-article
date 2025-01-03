import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ArticleForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/articles", { title, text }); // Appel direct à l'API
      navigate("/");
    } catch (error) {
      console.error("Failed to create article", error);
    }
  };
  const handleGoBack = () => {
    navigate("/"); // Redirige vers la page d'accueil
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Create Article</button>
      </form>
      <button onClick={handleGoBack} style={{ marginTop: "20px" }}>
        <FaArrowLeft /> Go Back
      </button>
    </div>
  );
};

export default ArticleForm;
