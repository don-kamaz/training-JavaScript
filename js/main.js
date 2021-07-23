const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

const changeClass = elem => {
  console.log(elem)
  for(let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].classList.remove('active');
  }
  elem.classList.add('active');
}

tabs.addEventListener('click', evt => {
  const currentTab = evt.target.dataset.btn;
  changeClass(evt.target);
  for(let i = 0; i < content.length; i++) {
    content[i].classList.remove('active');
    if(content[i].dataset.content === currentTab) {
      content[i].classList.add('active');
    }
  }
})

const exchangeClass = element => {
  if(elem.classList.contains('active')) {
    content.classList.add('active');
  } 
}