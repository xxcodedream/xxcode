import React, {FC, useEffect} from 'react';
import classNames from 'classnames';
import ScrollReveal from 'scrollreveal';
import {Link} from 'react-router-dom';
import './Main.scss';
import Menu from './Menu/menu';
import MenuItem from './Menu/menuItem';
// slogin
const renderSlogin = () => {
  return (
    <div className='xq-main-slogin'>
      <h3>上善若水</h3>
      <h3>厚德载物</h3>
    </div>
  )
}
// nav
const renderNav = () => {
  // nav 数据
  const navList = ['所有', 'vue', 'react', 'demo'];
  return (
    <nav className="xq-main-nav">
      <Menu defaultIndex="0" mode='hor' className="xq-main-nav-menu" >
        {
          navList.map((item, i) => <MenuItem key={i} className="xq-main-nav-menu-item">{item}</MenuItem>)
        }
      </Menu>
    </nav>
  )
}
// contanier
const renderContent = () => {

  return (
    <div className={`xq-list clearfix`}>
      <div className="list-item">
        <div className="item-pading">
          <img data-t-id="15143" width="655" height="545" src="https://ccdn.goodq.top/caches/85e9413af2fb7f593b2c9e26f027fb64/aHR0cHM6Ly81ZDZjYWM5NThlNzFmLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDgvODM5ZDgxZmMwMTlmZmMxNWYzNzZkNzZjNmZmZDA1YzQtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp" className="attachment-full" alt="01" title="" data-title="01" src-img="" />
        </div>
      </div>
      <div className="list-item">
        <div className="item-pading">
          <img data-t-id="15143" width="655" height="545" src="https://ccdn.goodq.top/caches/85e9413af2fb7f593b2c9e26f027fb64/aHR0cHM6Ly81ZDZjYWM5NThlNzFmLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDgvODM5ZDgxZmMwMTlmZmMxNWYzNzZkNzZjNmZmZDA1YzQtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp" className="attachment-full" alt="01" title="" data-title="01" src-img="" />
        </div>
      </div>
      <div className="list-item">
        <div className="item-pading">
          <img data-t-id="15143" width="655" height="545" src="https://ccdn.goodq.top/caches/85e9413af2fb7f593b2c9e26f027fb64/aHR0cHM6Ly81ZDZjYWM5NThlNzFmLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDgvODM5ZDgxZmMwMTlmZmMxNWYzNzZkNzZjNmZmZDA1YzQtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp" className="attachment-full" alt="01" title="" data-title="01" src-img="" />
        </div>
      </div>
      <div className="list-item">
        <div className="item-pading">
          <img data-t-id="15143" width="655" height="545" src="https://ccdn.goodq.top/caches/85e9413af2fb7f593b2c9e26f027fb64/aHR0cHM6Ly81ZDZjYWM5NThlNzFmLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDgvODM5ZDgxZmMwMTlmZmMxNWYzNzZkNzZjNmZmZDA1YzQtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp" className="attachment-full" alt="01" title="" data-title="01" src-img="" />
        </div>
      </div>
      <div className="list-item">
        <div className="item-pading">
          <img data-t-id="15143" width="655" height="545" src="https://ccdn.goodq.top/caches/85e9413af2fb7f593b2c9e26f027fb64/aHR0cHM6Ly81ZDZjYWM5NThlNzFmLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDgvODM5ZDgxZmMwMTlmZmMxNWYzNzZkNzZjNmZmZDA1YzQtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp" className="attachment-full" alt="01" title="" data-title="01" src-img="" />
        </div>
      </div>
      <div className="list-item">
        <div className="item-pading">
          <img data-t-id="15143" width="655" height="545" src="https://ccdn.goodq.top/caches/85e9413af2fb7f593b2c9e26f027fb64/aHR0cHM6Ly81ZDZjYWM5NThlNzFmLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDgvODM5ZDgxZmMwMTlmZmMxNWYzNzZkNzZjNmZmZDA1YzQtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp" className="attachment-full" alt="01" title="" data-title="01" src-img="" />
        </div>
      </div>
      <div className="list-item">
        <div className="item-pading">
          <img data-t-id="15143" width="655" height="545" src="https://ccdn.goodq.top/caches/85e9413af2fb7f593b2c9e26f027fb64/aHR0cHM6Ly81ZDZjYWM5NThlNzFmLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDgvODM5ZDgxZmMwMTlmZmMxNWYzNzZkNzZjNmZmZDA1YzQtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp" className="attachment-full" alt="01" title="" data-title="01" src-img="" />
        </div>
      </div>
      <div className="list-item">
        <div className="item-pading">
          <Link to="/demo/point-light">
            <div className="custom">
              <div className="title">
                聚光灯
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="list-item">
        <div className="item-pading">
          <Link to="/demo/compute">
            <div className="custom">
              <div className="title">
                拟态化计算器
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
};
// main的props属性
interface IMain {
  className ?: string;
  style?: React.CSSProperties;
}

/*class Main extends React.PureComponent<IMain> {
  constructor(props:IMain){
    super(props);
    this.state = {
    }
  };

  componentDidMount(){
    const sta = {
      // 动画的时长
      duration: 500,
      // 延迟时间
      delay: 300,
      // 动画开始的位置，'bottom', 'left', 'top', 'right'
      origin: 'bottom',
      // 回滚的时候是否再次触发动画
      //reset: false,
      // 在移动端是否使用动画
      //mobile: false,
      // 滚动的距离，单位可以用%，rem等
      distance: '50px',
      // 其他可用的动画效果
      opacity: 0.001,
      easing: 'ease-in-out',
      //scale: 0.9,
    }
    ScrollReveal().reveal('.list-item', {...sta, interval:100});
  }

  render(){
    const { className, style } = this.props;
    const classes = classNames('xq-main', className)
    return <div className={classes} style={style}>
      <div className="xq-main-top">
        {renderSlogin()}
        {renderNav()}
      </div>
      {renderContent()}
    </div>
  }
} */

const Main:FC<IMain> = (props) => {

  useEffect(() => {
    const sta = {
      // 动画的时长
      duration: 500,
      // 延迟时间
      delay: 300,
      // 动画开始的位置，'bottom', 'left', 'top', 'right'
      origin: 'bottom',
      // 回滚的时候是否再次触发动画
      //reset: false,
      // 在移动端是否使用动画
      //mobile: false,
      // 滚动的距离，单位可以用%，rem等
      distance: '50px',
      // 其他可用的动画效果
      opacity: 0.001,
      easing: 'ease-in-out',
      //scale: 0.9,
    }
    ScrollReveal().reveal('.list-item', {...sta, interval:100});
  },[])

  const { className, style } = props;
  const classes = classNames('xq-main', className);
  
  return <div className={classes} style={style}>
    <div className="xq-main-top">
      {renderSlogin()}
      {renderNav()}
    </div>
    { renderContent() }
  </div>
};

export default Main;