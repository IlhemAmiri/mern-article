import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../style.css";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getArticles = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/api/articles"); // Appel direct à l'API
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch articles", error);
      }
    };
    getArticles();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/articles/${id}`); // Appel direct à l'API
      setArticles(articles.filter((article) => article._id !== id));
    } catch (error) {
      console.error("Failed to delete the article", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`); // Redirige vers la page d'édition
  };

  const handleTitleClick = (id) => {
    navigate(`/articles/${id}`); // Redirige vers la page de détails de l'article
  };
  const handleAddArticle = () => {
    navigate("/create"); // Redirige vers la page de création d'article
  };

  return (
    <div>
      <h2>Articles</h2>
      <button onClick={handleAddArticle} style={{ marginBottom: "20px" }}>
        Ajouter un article
      </button>
      <div className="article-list">
        {articles.map((article) => (
          <div key={article._id} className="article-card">
            <h3 onClick={() => handleTitleClick(article._id)}>
              {article.title}
            </h3>
            <p>{article.text}</p>
            <div className="article-actions">
              <FaTrash
                onClick={() => handleDelete(article._id)}
                style={{ cursor: "pointer", color: "red" }}
              />
              <FaEdit
                onClick={() => handleEdit(article._id)}
                style={{ cursor: "pointer", color: "blue" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
