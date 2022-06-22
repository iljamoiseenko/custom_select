let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout( () =>{
        mask.remove();
    }, 4000);
})

var elm = document.querySelector('#progress');
setInterval(function(){
    if(!elm.innerHTML.match(/100%/gi)){
    elm.innerHTML = (parseInt(elm.innerHTML) + 1) + '%';
    } else {
    clearInterval();
    }
}, 38)

const selectSingle = document.querySelector('.select');
const selectSingle_title = selectSingle.querySelector('.select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.select__label');

selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

