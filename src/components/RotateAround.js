import posed from 'react-pose'

const RotateAround = posed.div({
  hoverable: true,
  init: {
    transform: 'rotateY(0deg)',
    delay: 200,
  },
  hover: {
    transform: 'rotateY(180deg)',
    delay: 400,
  },
})

export default RotateAround
