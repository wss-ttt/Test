class MyBtn{
	// 构造函数
	constructor (txt){
		this.txt=txt;
	}

	console(){
		// console.log(this.txt);
		this.onStateChange(this.txt);   // 自定义事件
	}
	// 成员方法
	render(){
		this.el=createDOMFromString(`<button class="btn btn-primary">${this.txt}</button>`);
		// 添加事件
		this.el.addEventListener('click',this.console.bind(this),false);
		return this.el;
	}
}


const createDOMFromString = (domString) => {
  const div = document.createElement('div')
  div.innerHTML = domString
  return div
}