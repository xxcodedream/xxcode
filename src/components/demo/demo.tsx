/**
 * @author hxq
 * @description 作为单页demo的父节点，设置居中，背景色之类的
 */
import React, { FC, CSSProperties } from 'react';
import classNames from 'classnames';

interface IDemo {
  className?: string;
  style?: CSSProperties;
};

const Demo:FC<IDemo> = (props) => {

  const {className, style, children} = props;

  const classes = classNames('body', className)
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  )
}

export default Demo;