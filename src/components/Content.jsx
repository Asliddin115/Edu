import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Acceptance from '../pages/Acceptance'
import Teachers from '../pages/Teachers'
import Teams from '../pages/Teams'
import Students from '../pages/Students'
import Error from '../pages/Error'
export default function Content() {
    return (
        <div className='content'>

            <Routes>
                <Route path='/' element={<Students/>} />
                <Route path='/students' element={<Students/>} />
                <Route path='/teachers' element={<Teachers/>} />
                <Route path='/teams' element={<Teams/>} />
                <Route path='/accep' element={<Acceptance/>} />
           <Route path='*' element={<Error/>} />
            </Routes>

        </div>
    )
}
