var swiper = new Swiper ('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    slidesPerview: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadow: true,
        
    },
    pagination: {
        el: '.swiper-pagination',
    },
    loop: true,
});

function toggleMenu() {
  const menuToggle = document. querySelector('toggle');
  const navigation = document. querySelector('.navigation');
  menuToggle.classList.toggle('active')
  navigation.classList.toggle('active')
  
}
