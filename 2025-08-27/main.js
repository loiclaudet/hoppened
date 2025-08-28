const headings = gsap.utils.toArray('h2')
const section = document.querySelector('section')
const vW = window.innerWidth
const sectionWidth = section.scrollWidth
const xOffset = sectionWidth - vW

gsap.set(headings[1], {
  x: `-=${xOffset}px`,
})

gsap.to(headings, {
  scrollTrigger: {
    trigger: section,
    start: 'center center',
    end: '+=300%',
    scrub: 2,
    pin: true,
  },
  x: i => (i % 2 ? `+=${xOffset}px` : `-=${xOffset}px`),
})
