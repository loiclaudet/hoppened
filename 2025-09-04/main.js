const feTurbulenceElement = document.querySelector('feTurbulence')
const button = document.querySelector('button')

const tl = gsap.timeline({ paused: true })
const animationDuration = 0.4 // in seconds

tl.to(feTurbulenceElement, {
  duration: animationDuration / 2,
  attr: { baseFrequency: '0 0.8' },
}).to(feTurbulenceElement, {
  duration: animationDuration / 2,
  attr: { baseFrequency: '0 0' },
})

button.addEventListener('mouseenter', () => {
  gsap.set(button, { filter: 'url(#filter-noise)' })
  tl.restart()
})

button.addEventListener('mouseleave', () => {
  gsap.set(button, { filter: 'none' })
  tl.pause()
})
