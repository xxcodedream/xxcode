import React, {FC, createContext, useState, FunctionComponentElement} from 'react';
import classNames from 'classnames';
import {IMenuItemProps} from './menuItem'
import './menu.scss'

type Mode = 'ver' | 'hor';
type selectCallBack = (index: string) => void;
interface IMenuProps {
  defaultIndex: string; // 默认选项
  mode: Mode; // 方向
  onSelect?:  selectCallBack;// 选择回调
  className?: string; // class名称
  style?: React.CSSProperties; // 原有样式
  defaultOpenSubs?: string[]; // 默认打开的submenu
}
interface IMenuContext { // context的类型
  index: string;
  onSelect?: selectCallBack;
  mode?: Mode;
  // defaultOpenSubs?: string[]; // 默认打开的submenu
}
// menu中得context
export const menuContext = createContext<IMenuContext>({index: '0'}); 
const Menu:FC<IMenuProps> = (props) => {

  const { children, defaultIndex, onSelect, mode, style, className } = props;
  const [ currentIndex, setCurrent] = useState(defaultIndex);

  // menu class 合集
  const classes = classNames(className, 'menu', `menu-${mode}`);

  // 回调处理
  const handleClick = (index:string) => {
    setCurrent(index);
    console.log(index);
    if(onSelect){
      onSelect(index);
    }
  }

  const renderChilren = () => {
    return React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<IMenuItemProps>;
      // 判断子元素是否时menuItem
      if(childElement.type.displayName === 'MenuItem'){
        return React.cloneElement(childElement, {index: `${i}`});
      } else console.error('waring: menu has a child is not menuItem');
    });
  }

  // 传递中的值
  const passContext: IMenuContext = {
    index: currentIndex ? currentIndex : '0',
    onSelect: handleClick,
    mode,
  }
  return (
    <>
      <ul style={style} className={classes}>
        <menuContext.Provider value={passContext}>
          {renderChilren()}
        </menuContext.Provider>
      </ul>
    </>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'hor',
}

export default Menu;
