import { BaseRouter } from './base.js';
export class HashRouter extends BaseRouter {
  constructor(list) {
    super(list);
    this.handler();
    // 监听 hashchange 事件
    window.addEventListener('hashchange', e => {
      this.handler();
    });
  }
  // hash 改变时，重新渲染页面
  handler() {
    this.render(this.getState());
  }
  // 获取 hash 值
  getState() {
    const hash = window.location.hash;
    return hash ? hash.slice(1) : '/';
  }
  // push 新的页面
  push(path) {
    window.location.hash = path;
  }
  // 获取 默认页 url
  getUrl(path) {
    const href = window.location.href;
    const i = href.indexOf('#');
    const base = i >= 0 ? href.slice(0, i) : href;
    return base +'#'+ path;
  }
  // 替换页面
  replace(path) {
    window.location.replace(this.getUrl(path));
  }
  // 前进 or 后退浏览历史
  go(n) {
    window.history.go(n);
  }
}
