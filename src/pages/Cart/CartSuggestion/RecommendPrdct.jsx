import React, { useState } from 'react'
import './styles.scss'

export const RecommendPrdct = ({ children }) => {
  return <div className="recommend-product-item">{children}</div>
}

const Slider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }
    setActiveIndex(newIndex)
  }

  return (
    <div className="recommend-product-slider">
      <div
        className="slider-inner"
        style={
          window.innerWidth > 767
            ? { transform: `translateX(-${activeIndex * 33}%)` }
            : { transform: `translateX(-${activeIndex * 100}%)` }
        }
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { width: '33%' })
        })}
      </div>
      <div className="slider-indicators">
        <button
          className="indicators-prev-btn"
          onClick={() => {
            updateIndex(activeIndex - 1)
          }}
        >
          {'<'}
        </button>
        <button
          className="indicators-next-btn"
          onClick={() => {
            updateIndex(activeIndex + 1)
          }}
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default Slider
