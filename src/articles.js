import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import db from "./firebaseConfig";

const HomePage = () => {
    const [articles, setArticles] = useState([' ']);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await db.collection("articles").get();
                const data = response.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setArticles(data);
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            }
        };
        fetchArticles();
    }, []);

    return (
        <>
            {articles && (
                <div className="articles-body">
                    {articles.map((article) => (
                        <div key={article.id} className="articles-post">
                            <Link to={`/article/${article.id}`}>
                                <div className="articles-img-wrapper">
                                    <img className="articles-img" src={article.imageUrl}></img>
                                </div>
                                <div className="articles-title-wrapper">
                                    <p className="articles-title">{article.title}</p>
                                </div>
                            </Link>

                        </div>
                    ))}
                </div>

            )}

        </>
    )
};

export default HomePage;

