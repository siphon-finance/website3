const animateChartTop = document.querySelector('.charts-top')
const animateChartBottom = document.querySelector('.charts-bottom')
const animateNft = document.querySelector('.nft')
const animateRoadmap = document.querySelector('.roadmap')

window.onload = function(){

  animateChartTop.classList.add('animated', 'fadeInLeft')
  animateChartBottom.classList.add('animated', 'fadeInRight')
  animateNft.classList.add('animated', 'fadeInUp')
  animateRoadmap.classList.add('animated', 'fadeInUp')

}
 

// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     console.log(rect)
//     const html = document.documentElement;
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || html.clientHeight) &&
//       rect.right <= (window.innerWidth || html.clientWidth)
//     );
//   }

// // const animateChartTop = document.querySelector('.charts-top')
// window.addEventListener('scroll', function() {
//   i
//     if (isInViewport(animateChartTop)) {
//       animateChartTop.classList.remove('hidden')
//         animateChartTop.classList.add('animate__slideInLeft')
//     }
// })

// // const animateChartBottom = document.querySelector('.charts-bottom')
// window.addEventListener('scroll', function() {
//     if (isInViewport(animateChartBottom)) {
//       animateChartBottom.classList.remove('hidden')
//         animateChartBottom.classList.add('animate__slideInRight')
//     }
// })

// // const animateNft = document.querySelector('.nft')
// window.addEventListener('scroll', function() {
//     if (isInViewport(animateNft)) {
//       animateNft.classList.remove('hidden')
//         animateNft.classList.add('animate__slideInUp')
//     }
// })

// // const animateRoadmap = document.querySelector('.charts-bottom')
// window.addEventListener('scroll', function() {
//     if (isInViewport(animateRoadmap)) {
//       animateRoadmap.classList.remove('hidden')
//         animateRoadmap.classList.add('animate__slideInUp')
//     }
// })

