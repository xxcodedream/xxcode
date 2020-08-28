import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Icon from '../../components/Icon/icon';
import './articleList.scss';

library.add(fas);
const ArticleList = () => {

  const [articleList, setArticleList] = useState([{title:'', id:'', typeName: '', introduce: '', addTime: '', viewCount:''}]);
  const history = useHistory();

  useEffect(() => {
    fetchArticleList();
  }, []);

  const fetchArticleList = () =>{
    fetch('http://127.0.0.1:7001/article-list')
      .then((response) => response.json())
      .then((res) => {
        const { data=[] } = res;
        setArticleList(data)
        console.log(res);
      })
  }

  return <div className="article-list">
    {articleList.map((item) => {
      return <div key={item.id} className="article-item">
        <div className='article-title'>
          <a href={`/article/${item.id}`}>{item.title}</a>
        </div>
        <div className='article-baseinfo'>
          <span className='article-type'><Icon icon="folder"></Icon>{item.typeName}</span>
          <span className='article-create-data'><Icon icon="calendar-alt"></Icon>{item.addTime}</span>
          <span className='article-view-count'><Icon icon="fire"></Icon>{item.viewCount}人</span>
        </div>
        <div className='article-introduce'>
          {item.introduce}
        </div>
        <div className='introduce-goto'><Icon icon='file' style={{color: '#ccc'}}></Icon><a>查看全文</a></div>
      </div>
    })}
  </div>;
};

export default ArticleList;
