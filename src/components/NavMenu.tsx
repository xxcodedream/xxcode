import React, { FC, useState } from 'react';
import classNames from 'classnames';
import './NavMenu.scss';
import Menu from './Menu/menu';
import MenuItem from './Menu/menuItem';
import Transition from './Transition/transition';

const NavMenu:FC = (props) => {

  // 菜单打开按钮
  const [open, setOpen] = useState(false);

  const handleBtnClick = () => {
    setOpen(!open)
  };

  const classes = classNames('xq-nav-menu-content', {'menu-open': open});

  return (
    <div className="xq-nav-menu">
      <div className={classes}>
        <div className="xq-nav-menu-button" onClick={handleBtnClick}>
        </div>
        <Transition in={open} timeout={300} animation="zoom-in-top">
          <div className="xq-nav-menu-container">
            <Menu mode='ver' defaultIndex="0">
              <MenuItem>关于我们</MenuItem>
              <MenuItem>我的信息</MenuItem>
              <MenuItem>关于我们</MenuItem>
              <MenuItem>关于我们</MenuItem>
              <MenuItem>我的信息</MenuItem>
              <MenuItem>关于我们</MenuItem>
              <MenuItem>我的信息</MenuItem>
              <MenuItem>关于我们</MenuItem>
              <MenuItem>我的信息</MenuItem>
            </Menu>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default NavMenu;