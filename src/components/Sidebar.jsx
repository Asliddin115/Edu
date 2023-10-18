import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='sidebar-menu'>      
        <li><NavLink to={"/accep"}><i class="bi bi-card-checklist"></i><span>Qabul</span></NavLink></li>
        <li><NavLink to={"/teams"}><i class="bi bi-microsoft-teams"></i><span>Gruhlar</span></NavLink></li>
        <li><NavLink to={"/teachers"}><i class="bi bi-person-video3"></i><span>O'qituvchilar</span></NavLink></li>
        <li><NavLink to={"/students"}><i class="bi bi-people-fill"></i><span>O'quvchilar</span></NavLink></li>
      </ul>
    </div>
  )
}

