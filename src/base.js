const ELEMENT = document.querySelector('#page');

export class BaseRouter {
  // list 表示路由表
  constructor(list) {
    this.list = list;
  }
  // 页面渲染函数
  render(state) {
    let ele = this.list.find(ele => ele.path === state);
    ele = ele ? ele : this.list.find(ele => ele.path === '*');
    ELEMENT.innerText = ele.component;
  }
}
