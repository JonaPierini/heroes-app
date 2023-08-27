import { HeroesList } from "../components/HeroesList"

export const DcPage = () => {
  return (
   <>
    <h1>DC Comic</h1>
    <hr />
    <HeroesList publisher={'DC Comics'}></HeroesList>
   </>
  )
}