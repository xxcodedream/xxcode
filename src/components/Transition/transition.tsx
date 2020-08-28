import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

type AnimationName = 'zoom-in-top' | 'zoom-in-left'  | 'zoom-in-bottom' | 'zoom-in-right';

export interface TransitionProps extends CSSTransitionProps{
  animation?: AnimationName; // 动画名称
  wrapper?: Boolean; // 是否需要外壳
}
const Tansition:React.FC<TransitionProps> = (props) => {
  const { children, wrapper, classNames, animation, ...restProps } = props
  return <CSSTransition classNames={ classNames? classNames : animation } {...restProps}>
    {children}
  </CSSTransition>
}

Tansition.defaultProps={
  appear: true,
  unmountOnExit: true
}

export default Tansition;