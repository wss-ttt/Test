class MyBox{
	constructor(id){
		this.id=id;
	}
	render(){
		this.el=createDOMFromString(`<div id=${this.id} class="tt">
			<div class="watch">1</div>
			<div class="watch">2</div>
			<div class="watch">3</div>
			<div class="watch">4</div>
			<div class="watch">5</div>
			<div class="watch">6</div>
			<div class="watch">7</div>
			<div class="watch">8</div>
			<div class="watch">9</div>
			<div class="watch">1</div>
			
			<div class="watch">1</div>
			<div class="watch">2</div>
			<div class="watch">3</div>
			<div class="watch">4</div>
			<div class="watch">5</div>
			<div class="watch">6</div>
			<div class="watch">7</div>
			<div class="watch">8</div>
			<div class="watch">9</div>
			<div class="watch">1</div>
		</div>`);
		return this.el;
	}
}



const createDOMFromString = (domString) => {
  const div = document.createElement('div')
  div.className='ttBox';
  div.innerHTML = domString
  return div
}