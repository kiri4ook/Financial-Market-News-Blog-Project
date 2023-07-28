import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "./firebaseConfig";

const ArticlePage = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const docRef = db.collection("articles").doc(id);
                const docSnapshot = await docRef.get();
                if (docSnapshot.exists) {
                    setArticle({ id: docSnapshot.id, ...docSnapshot.data() });
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            }
        };
        fetchArticle();
    }, [id]);

    if (!article) {
        return (
            <div className="loading-body">Loading...</div>
        )
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

