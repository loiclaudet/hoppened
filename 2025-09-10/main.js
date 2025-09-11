const section = document.querySelector('section');
const images = gsap.utils.toArray('img');
const imagesLength = images.length;

gsap.set(images, {
  opacity: index => (index === 0 ? 1 : 0),
});

gsap.to(section, {
  scrollTrigger: {
    trigger: section,
    start: 'center center',
    end: `+=200% center`,
    scrub: 0.1,
    pin: true,
    onUpdate: self => {
      const totalTransitions = imagesLength - 1;
      const currentTransition = self.progress * totalTransitions;
      const currentIndex = Math.floor(currentTransition);
      const transitionProgress = currentTransition - currentIndex;

      gsap.set(images, {
        opacity: index => {
          const isCurrent = index === currentIndex;
          const isNext = index === currentIndex + 1;
          return isCurrent ? 1 - transitionProgress : isNext ? transitionProgress : 0;
        },
      });
    },
  },
  clipPath: `inset(20% 33%)`,
});
