import React from 'react'
import { NavBar } from '../../ui/components/NavBar'
import { Routes, Route, Navigate } from 'react-router-dom'
import { MarvelPage } from '../pages/MarvelPage'
import { DcPage } from '../pages/DcPage'
import { Search } from '../../auth/pages/SearchPage'
import { Hero } from '../../auth/pages/HeroPage'



export const HeroesRoutes = () => {
  return (
    <>
        <NavBar/>
        <div style={{marginLeft: 30, marginRight:30}}> 
          <Routes>
              <Route path='/marvel' element={<MarvelPage/>}/>
              <Route path='/dc' element={<DcPage/>}/>

              <Route path='/search' element={<Search/>}/>
              <Route path='/hero/:id' element={<Hero/>}/>
          
              <Route path='/' element={<Navigate to={'/marvel'}/>}></Route>
          </Routes>
        </div>
        
    </>
  )
}
