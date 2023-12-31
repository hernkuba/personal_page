// great idea game
//coin flip whatever user pick it will always be i won
//for example If head hire if tails dont hire
//Reviewer checks head if he lose the he hires me
// ofc output is tails
const init = () => {

  const slideFromLeft = () => {
    const observer = new IntersectionObserver(visibleToUser => {
      visibleToUser.forEach(isVisible => {
        console.log(isVisible)
        if (isVisible.isIntersecting) { // isIntersecting explained https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting
          isVisible.target.classList.add('show')
        } else {
          isVisible.target.classList.remove('show')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach(element => observer.observe(element))
  }
  
  const slideFromRight = () => {
    const observer = new IntersectionObserver(visibleToUser => {
      visibleToUser.forEach(isVisible => {
        if (isVisible.isIntersecting) {
          isVisible.target.classList.add('showFromLeft')
        } else {
          isVisible.target.classList.remove('showFromLeft')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.slideFromLeft')
    hiddenElements.forEach(element => observer.observe(element))
  }

  const navBarAnimation = () => {
    const icon = document.querySelector('.icon')
    const navItems = document.querySelectorAll('.notVisible')
    icon.onclick = navBarShow
    let zmienna = 0
    function navBarShow () {
      if (zmienna == 0) {
        icon.style.transform = 'rotate(180deg)'
        zmienna = 1
      } else if (zmienna == 1) {
        icon.style.transform = 'rotate(0deg)'
        zmienna = 0
      }
      navItems.forEach(item => {
        item.classList.toggle('visible')
      })
    }
  }

  const scroll = document.querySelector('.scrollNav')
  const scrollHeight = scroll.offsetHeight;
  document.documentElement.style.setProperty(
    '--scroll-padding',
    scrollHeight + 'px'
  )
  navBarAnimation()
  slideFromLeft()
  slideFromRight()
}

init()
