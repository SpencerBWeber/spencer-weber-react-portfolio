import React from 'react'

const PortfolioDetail = props => {
  return (
    <div>
      <h2>Portfolio Detail for {props.match.params.slug}</h2>
    </div>
  )
}

export default PortfolioDetail