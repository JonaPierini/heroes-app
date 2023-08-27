
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroesList = (props) => {
    const heroes = getHeroesByPublisher(props.publisher)
     
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3 m-3'>
     
        {heroes.map((elem) => <HeroCard key={elem.id} {...elem}></HeroCard>)}
      
    </div>
  )
}
