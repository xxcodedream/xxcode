import React, { FC } from "react";
import classNames from 'classnames';
import marked from 'marked';
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import './markdown.scss'

interface IMarkdownProp {
  source: string; // markdown语法的字符串
  className?: string;
}

const Markdown: FC<IMarkdownProp> = (props) => {
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer, 
    gfm: true,
    pedantic: false,
    sanitize: false,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: (code) => {
      return hljs.highlightAuto(code).value;
    }
  });
  const { source, className } = props;

  const loadMarkdown =() => {
    return marked(source);
  }

  const classes = classNames('markdown', className);
  return (
    <div className={classes} ref={el => el ? el.innerHTML=loadMarkdown() || '' : ''}>
    </div>
  );
};

export default Markdown;
