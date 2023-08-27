import React from "react";
import { HeroCard } from "../../heroes/components/HeroCard";
//instalamos npm i query-string
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import { getHeroesByName } from "../../heroes/helpers/getHeroesByName";



export const Search = () => {
  //sirve para obtener la navegación y poder navegar
  const navigate = useNavigate()
  //nos tira la data de la localizacion donde nos encontramos
  const location = useLocation()

  const {q = ''} = queryString.parse(location.search)

  const heroes = getHeroesByName(q)
  
  const {searchText, onInputChange} = useForm({
    searchText: q
  })

  const handleSearchSubmit = (e) =>{
    e.preventDefault()
    if(searchText.trim().length <= 1) return
    //nos va a navegar en la misma panatalla donde estamos (search) y le va a agregar la data que escribimos
     navigate(`?q=${searchText}`)
  }

  return (
    <div>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSearchSubmit}>
            <input
              text="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            ></input>
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            (q === 0)
            ? <div className="alert alert-primary">Search a Hero</div>
            : (heroes.length === 0) &&  <div className="alert alert-danger"> No hero with <b>{q}</b>
          </div>
          }
               
            {
              heroes.map(hero=> (
                <HeroCard key={hero.id} {...hero}></HeroCard>
              ))
            }
        </div>
      </div>
    </div>
  );
};
