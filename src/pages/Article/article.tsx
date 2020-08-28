import React, { FC, useState, useEffect } from "react";
import { useParams } from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Icon from '../../components/Icon/icon';
import Markdown from '../../components/Markdown/markdown';
import './article.scss'

library.add(fas);
interface IActicleInfo {
  title: string;
  content: string;
}
interface IArticle {
}
interface IArticleParams {
  id: string
}
const Article:FC<IArticle> = (props) => {

  const [article, setArticle] = useState({
    title: '',
    content: '',
    typeName: '',
    addTime: '',
    viewCount: '',
  });

  const params:IArticleParams = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:7001/getArticleById/${params.id}`).then((response) => response.json())
      .then((res) => {
        setArticle(res.data[0]);
      });
  }, []);

  const toLogin = () => {
    fetch(`http://127.0.0.1:7001/admin/checkOpenId`, {
      body: JSON.stringify({"userName": "root", "password": "1230"}),
      headers: {
        "content-type":"application/json; charset=utf-8"
      },
      credentials: 'include',
      method: 'POST'
    }).then((response) => response.json())
      .then((res) => {
        console.log(res)
      });
  }

  const toGetInfo = () => {
    fetch(`http://127.0.0.1:7001/admin/index`, {
      method: 'GET',
      headers:{
        "Access-Control-Allow-Origin": "*"
      },
      credentials: 'include',
    }).then((response) => response.json())
      .then((res) => {
        console.log(res)
      });
  }

  return <div className='article'>
    {/* <button onClick={() => {toLogin()}}>登陆</button>
    <button onClick={() => {toGetInfo()}}>获取</button> */}
    <div className='article-title'>{article.title}</div>
    <div className='article-baseinfo'>
      <span className='article-type'><Icon icon="folder"></Icon>{article.typeName}</span>
      <span className='article-create-data'><Icon icon="calendar-alt"></Icon>{article.addTime}</span>
      <span className='article-view-count'><Icon icon="fire"></Icon>{article.viewCount}人</span>
    </div>
    <Markdown source={article.content} ></Markdown>
  </div>
}

export default Article;