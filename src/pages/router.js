import React from 'react';
//引入一些模块
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
//引入需要用到的页面组件
import Home from './Home';
// demo下的导入
import Demo from '../components/demo/demo';
import Compute from '../components/demo/Compute/compute';
import PointLight from '../components/demo/PointLight/pointLight';
import PageNotFound from '../components/Error/pageNotFound';
import SearchBox from '../components/demo/Search'

import ArticleList from './Article/articleList.tsx';
import Article from './Article/article.tsx';
function router() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* demo */}
          <Route path='/demo' component={Demo}>
            {/* ？这里的嵌套路由有点迷 */}
            <Route path="/demo/point-light" component={PointLight} />
            <Route path="/demo/compute" component={Compute} />
            <Route path="/demo/search-box" component={SearchBox} />
          </Route>
          <Route exact path="/article-list" component={ArticleList} />
          <Route path="/article/:id" component={Article} />
          {/* 所有路径都要在404前， 否则会先匹配到改路由规则 */}
          <Route component={PageNotFound}></Route>
        </Switch>
    </Router>
  )
}

export default router
