import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft } from "react-icons/fa";

const ArticleDetail = () => {
  const { id } = useParams();  // Récupère l'ID depuis l'URL
  const [article, setArticle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getArticle = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/api/articles/${id}`);  // Appel direct à l'API
        setArticle(data);
      } catch (error) {
        console.error('Failed to fetch article', error);
      }
    };

    getArticle();
  }, [id]);

  if (!article) {
    return <p>Loading...</p>;
  }
  const handleGoBack = () => {
    navigate('/');  // Redirige vers la page d'accueil
  };

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.text}</p>
      <button onClick={handleGoBack} style={{ marginTop: "20px" }}>
        <FaArrowLeft /> Go Back
      </button>
    </div>
  );
};

export default ArticleDetail;
