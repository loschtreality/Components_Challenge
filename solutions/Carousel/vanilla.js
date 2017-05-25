// option to manually or dynamically load images into DOM
const images = [
  'http://res.cloudinary.com/loren-losch/image/upload/c_scale,w_801/v1495741596/macbook_sibsqr.jpg',
  'http://res.cloudinary.com/loren-losch/image/upload/c_scale,w_835/v1495741597/deer_jtwwgz.jpg',
  'http://res.cloudinary.com/loren-losch/image/upload/v1495746611/desert_lsmxot.jpg',
  'http://res.cloudinary.com/loren-losch/image/upload/v1495746597/watch_rtxviz.jpg',
  'http://res.cloudinary.com/loren-losch/image/upload/v1495746597/store_zojsbm.jpg',
]

const imagesDiv = document.querySelector('.images')
const barsDiv = document.querySelector('.bars')
const arrows = Array.from(document.querySelectorAll('.carousel-arrow'))
let imageIndex = 0

  /** Dynamic Elements **/

  images.forEach((pictureURL, index) => {
    const imageTag = document.createElement('img')
    const bar = document.createElement('div')

    if (index === 0) {
      imageTag.classList.add('image-active')
      bar.classList.add('bar-active')
    }

    imageTag.classList.add('carousel-image')
    imageTag.src = pictureURL

    bar.classList.add('bar')

    imagesDiv.appendChild(imageTag)
    barsDiv.appendChild(bar)
  })


  /** Event Functions **/

  /**
   * Moves the image in the carousel left or right
   * @param  {Boolean} left True for left, False for right
   * @return {Void}
   */
  function move(left) {

    return function (ev) {

    const carouselImages = Array.from(document.querySelectorAll('.carousel-image'))
    const bars = Array.from(document.querySelectorAll('.bar'))
    if (imageIndex === 0 && left) return console.warn('reached left limit')
    if (imageIndex === images.length - 1 && !left) return console.warn('reached right limit')

    carouselImages[imageIndex].classList.remove('image-active')
    bars[imageIndex].classList.remove('bar-active')

    left ? imageIndex-- : imageIndex++

    carouselImages[imageIndex].classList.add('image-active')
    bars[imageIndex].classList.add('bar-active')
  }


  }


  /** Event Listeners**/

  const leftArrow = arrows[0]
  const rightArrow = arrows[1]
  leftArrow.addEventListener('click', move(true))
  rightArrow.addEventListener('click', move(false))
