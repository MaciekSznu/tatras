export const exportsedInfoBeforeEnter = function() {
  // eslint-disable-next-line prettier/prettier
  el.style.opacity = 0,
  el.style.transform = 'translateX(-100%)'
}

// infoEnter(el, done) {
//   gsap.to(el, {
//     duration: 2,
//     opacity: 0.8,
//     transform: 'translateX(0)',
//     ease: 'circ.out',
//     onComplete: done
//   })
// },
// imageBeforeEnter(el) {
//   el.style.transform = 'translateX(100%)'
// },
// imageEnter(el, done) {
//   gsap.to(el, {
//     duration: 2,
//     transform: 'translateX(0)',
//     ease: 'circ.out',
//     onComplete: done
//   })
// }