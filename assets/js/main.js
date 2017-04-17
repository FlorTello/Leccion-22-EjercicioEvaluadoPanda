var arrayImgs = [{url:"assets/img/panda1.jpg", alt:'panda' },
                 {url:"assets/img/panda2.jpg", alt:'panda' },
                 {url:"assets/img/panda3.jpg", alt:'panda' },
                 {url:"assets/img/panda4.jpg", alt:'panda' }
               ];
var dfm = document.createDocumentFragment();
window.addEventListener('load',function(){
  arrayImgs.forEach((e,i)=>dfm.appendChild(crearImgPanda(e,i)));
  document.getElementById('box-imgs').appendChild(dfm);
});
document.getElementById('origen').addEventListener('click',function(){
  document.getElementById('box-info-origen').classList.toggle('visibilityHidden');
});
document.getElementById('extincion').addEventListener('click',function(){
  document.getElementById('box-info-extincion').classList.toggle('visibilityHidden');
});
document.getElementById('restaurarFotos').addEventListener('click',function(){
  var imgs = document.getElementsByClassName('figure-panda');
  console.log(imgs);
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].classList.remove('displayNone');
  }
});
function crearImgPanda(elemento){
  var figure = document.createElement('figure');
  var img = document.createElement('img');
  var span = document.createElement('span');
  var figcaption = document.createElement('figcaption');

  figure.setAttribute('class','figure-panda');
  // figure.setAttribute('id','img-'+id);
  span.innerHTML = "X";

  img.setAttribute('src',elemento.url);
  img.setAttribute('alt',elemento.alt);
  span.addEventListener('click',function(e){
    e.target.parentNode.classList.toggle('displayNone');
    // e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  });
  figure.appendChild(img);
  figure.appendChild(span);
  figure.appendChild(figcaption);
  return figure;
}
