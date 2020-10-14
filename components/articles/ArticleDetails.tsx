import React from "react";
import {ArticleModel} from "../../models/article-model";

type Props = {
    article: ArticleModel
}

const ArticleDetails: React.FC<Props> = ({ article }) => {
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </>
  );
};
export default ArticleDetails;
