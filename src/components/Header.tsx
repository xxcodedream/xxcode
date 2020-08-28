import React, {FC} from 'react';
import classNames from 'classnames';
import './Header.scss';
import NavMenu from './NavMenu';

// Header的props属性
interface IHeader {
  className ?: string;
  style?: React.CSSProperties;
}

const Header:FC<IHeader> = (props) => {
  const { className, style } = props;
  const classes = classNames('xq-header', className)
  return (
    <div className={classes} style={style}>
      <div className="wrap-padding"  style={{width: '100%'}}>
        <span>LOGO</span>
        <span>更多功能，敬请期待...</span>
      </div>
      <NavMenu></NavMenu>
    </div>
  )
}

export default Header;