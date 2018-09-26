console.log('scripts loaded');

var burger = document.getElementById('burger');
var mobileNav = document.getElementById('offscreen-nav');
var closeBtn = document.getElementById('close-btn');
var content = document.getElementById('content');
var moreInfo = document.getElementById('more-info');
var tooltip = document.getElementById('tooltip');

burger.addEventListener('click', function(){
  console.log('button clicked');
  mobileNav.style.width = '50%';
  mobileNav.style.transition = '0.5s ease';
  content.style.opacity = '0.3';
});

closeBtn.addEventListener('click', function(){
  console.log('button clicked');
  mobileNav.style.width = '0%';
  mobileNav.style.transition = '0.5s ease';
  content.style.opacity = '1';
});

moreInfo.addEventListener('mouseenter', function(event){
  tooltip.style.opacity = '1';
  var x = event.pageX;
  var y = event.pageY;
  console.log(x);
  tooltip.style.top = y + 'px';
  tooltip.style.right = x + 'px';

});

moreInfo.addEventListener('mouseleave', function(event){
  tooltip.style.opacity = '0';
});
