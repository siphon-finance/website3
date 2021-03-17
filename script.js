window.onload = function(){
  const animateChartTop = document.querySelector('.charts-top')
  const animateChartBottom = document.querySelector('.charts-bottom')
  const animateNft = document.querySelector('.nft')
  const animateRoadmap = document.querySelector('.roadmap')
  

  animateChartTop.classList.add('hidden')
  animateChartBottom.classList.add('hidden')
  animateNft.classList.add('hidden')
  animateRoadmap.classList.add('hidden')

}
 

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

const animateChartTop = document.querySelector('.charts-top')
window.addEventListener('scroll', function(event) {
    if (isInViewport(animateChartTop)) {
        animateChartTop.classList.add('animate__slideInLeft')
        animateChartTop.classList.remove('hidden')
    }
})

const animateChartBottom = document.querySelector('.charts-bottom')
window.addEventListener('scroll', function(event) {
    if (isInViewport(animateChartBottom)) {
        animateChartBottom.classList.add('animate__slideInRight')
        animateChartBottom.classList.remove('hidden')
    }
})

