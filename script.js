function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }

const animateEl = document.querySelector('.nft')
window.addEventListener('scroll', function(event) {
    if (isInViewport(animateEl)) {
        animateEl.classList.add('animate__slideInLeft')
    }
})
