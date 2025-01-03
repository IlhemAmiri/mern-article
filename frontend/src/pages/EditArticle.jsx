import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaSave, FaArrowLeft } from 'react-icons/fa';

const EditArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({ title: '', text: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const getArticle = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/api/articles`);  // Appel direct à l'API
        const articleToEdit = data.find(article => article._id === id);
        if (articleToEdit) {
          setArticle({ title: articleToEdit.title, text: articleToEdit.text });
        }
      } catch (error) {
        console.error('Failed to fetch article', error);
      }
    };
    getArticle();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/articles/${id}`, article);  // Appel direct à l'API
      navigate('/');
    } catch (error) {
      console.error('Failed to update the article', error);
    }
  };
  const handleGoBack = () => {
    navigate('/');  // Redirige vers la page d'accueil
  };

  return (
    <div>
      <h2>Edit Article</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={article.title}
          onChange={(e) => setArticle({ ...article, title: e.target.value })}
          placeholder="Title"
        />
        <textarea
          value={article.text}
          onChange={(e) => setArticle({ ...article, text: e.target.value })}
          placeholder="Text"
        />
        <button type="submit">
          <FaSave /> Save
        </button>
      </form>
      <button onClick={handleGoBack} style={{ marginTop: '20px' }}>
        <FaArrowLeft /> Go Back
      </button>
    </div>
  );
};

export default EditArticle;
