import { BaseRouter } from './base.js';
export class HistoryRouter extends BaseRouter {
  constructor(list) {
    super(list);
    this.handler();
    // 监听 popstate 事件
    window.addEventListener('popstate', e => {
      console.log('触发 popstate。。。');
      this.handler();
    });
  }
  // 渲染页面
  handler() {
    this.render(this.getState());
  }
  // 获取 url 
  getState() {
    const path = window.location.pathname;
    return path ? path : '/';
  }
  // push 页面
  push(path) {
    history.pushState(null, null, path);
    this.handler();
  }
  // replace 页面
  replace(path) {
    history.replaceState(null, null, path);
    this.handler();
  }
   // 前进 or 后退浏览历史
  go(n) {
    window.history.go(n);
  }
}
