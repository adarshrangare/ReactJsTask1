import React from 'react'
import Header from './components/Header'
import CardsContainer from './components/CardsContainer'
import { leaderTeam,developmentTeam,salesTeam } from './constants'

const App = () => {
  return (
    <div className='container pt-5'>
        <Header/>
        <div className='text-3xl max-sm:text-2xl font-bold text-center '>Meet Our Team</div>
        <CardsContainer data={leaderTeam} title={"Leadership/Management Team"} />
        <CardsContainer data={developmentTeam} title={"Development Team"} />
        <CardsContainer data={salesTeam} title={"Sales and Marketing Team"} />
        
    </div>
  )
}

export default App