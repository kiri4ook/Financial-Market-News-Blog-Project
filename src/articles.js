import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
    const [articles, setArticles] = useState([' ']);

    useEffect(() => {
        axios
            .get("/mock.json")
            .then((response) => {
                setArticles(response.data);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке данных:", error);
            });
    }, []);


    return (
        <>
            {articles && (
                <div className="articles-body">
                    {articles.map((article, index) => (
                        <div key={index} className="articles-post">
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

