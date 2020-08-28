import React from 'react';
import classNames from 'classnames';
import './_icon.scss'
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

// 主题颜色
export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps;
}

const Icon:React.FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props;
  const classes = classNames(className, 'icon', {[`icon-${theme}`]: theme}) 
  return <FontAwesomeIcon className={classes} {...restProps}></FontAwesomeIcon>
}

export default Icon;

