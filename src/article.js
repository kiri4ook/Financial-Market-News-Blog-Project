import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        axios
            .get("/mock.json")
            .then((response) => {
                const articleData = response.data.find((item) => item.id === id);
                setArticle(articleData);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке данных:", error);
            });
    }, [id]);

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="article-wrapper">
                <div className="article-body">
                    <div className="article-title">
                        <h2>{article.title}</h2>
                    </div>
                    <img className="article-img" src={article.imageUrl}></img>
                    <div className="article-description">
                        <p>{article.description}</p>
                    </div>
                    <div className="article-expertComment">
                        <h4 className="article-expertComment-title">Experts Comment</h4>
                        <p>{article.expertComment}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArticlePage;