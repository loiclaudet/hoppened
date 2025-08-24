const [fig1, fig2, fig3] = gsap.utils.toArray('figure')
const vH = window.innerHeight
const vW = window.innerWidth
const figH = fig1.offsetHeight

const currentTop = vH * 0.7 // figures container is positionned at 70% from the top with CSS.
const targetCenter = vH * 0.5
const offset = targetCenter - currentTop - figH / 2

const tl = gsap.timeline({
  scrollTrigger: {
    scrub: 1,
  },
})

tl.to(
  fig1,
  {
    x: -vW * 0.05,
    y: offset,
    scale: 1.1,
    rotation: 5,
    duration: 1,
  },
  0
)
  .to(
    fig2,
    {
      x: vW * 0.05,
      y: offset - figH,
      scale: 1.15,
      rotation: -8,
      duration: 3,
    },
    0
  )
  .to(
    fig3,
    {
      x: 0,
      y: offset - figH * 2,
      scale: 1.05,
      rotation: -2,
      duration: 5.5,
    },
    0
  )
