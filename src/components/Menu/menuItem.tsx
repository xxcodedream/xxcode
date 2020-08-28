import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import { menuContext } from './menu' ;

export interface IMenuItemProps {
  index?: string; // 下标
  disabled?: boolean; // 是否disabled
  className?: string; // class名称
  to?: string; // 跳转
  style?: React.CSSProperties; // 设置样式
};

const MenuItem:FC<IMenuItemProps>  = (props) => {

  const { index, disabled, className, style, children } = props;
  // 拿到menuContext中得数据
  const context = useContext(menuContext);
  // menuItem的点击回调
  const handleClick = () => {
    // 当context有该函数，且不为disabled 并且index为string时，排除index为undefined
    if(context.onSelect && !disabled && (typeof index === 'string')){
      context.onSelect(index);
    }
  };

  const classes = classNames(className, 'menu-item', {'active': index === context.index});

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

MenuItem.displayName = 'MenuItem'; // 这是displayName的来源，在menu和subMenu中进行判断子节点时使用

export default MenuItem;