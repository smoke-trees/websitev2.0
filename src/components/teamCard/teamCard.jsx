import React from 'react'
import './teamCard.css'

class TeamCard extends React.Component{
  render(){
    return(
      <div className='team__card'>
        <div className='team__card__image'>
        </div>
        <div className='team__card__details'>
          <div className='team__card__name'>
            Namaewa
          </div>
          <div className='team__card__category'>
            UI/UX Design
          </div>
        </div>
      </div>
    )
  }
}

export default TeamCard