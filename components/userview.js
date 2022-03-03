import React from 'react';
import { useState } from 'react';
import user from '../styles/userview.module.css'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'

const name = 'Speed Dating'

export function PageHeader() {

  const [isOpen, setIsOpen] = useState(false);
  const openMenu= ()=> setIsOpen(!isOpen);
  return (
    <header className={user.header}>
    <nav className={user.navbar}>
        <a className={user.navlogo}> 
             <Image
              priority
              src="/images/icon400x400.jpg"
              className={utilStyles.borderCircle}
              height={40}
              width={40}
              alt={name}
            /> 
        </a>
      <ul className={isOpen === false ?
          user.navmenu : user.navmenu + ' ' + user.active}>
        <li className={user.navitem}>
            <a className={user.navlink}>Home</a>
        </li>
        <li className={user.navitem}>
            <a className={user.navlink}>Link1</a>
        </li>
        <li className={user.navitem}>
            <a className={user.navlink}>Link2</a>
        </li>
      </ul>
      <button className={isOpen === false ? user.hamburger : user.hamburger + ' ' + user.active}
                          onClick= {openMenu}
                          >
        <span className={user.bar}></span>
        <span className={user.bar}></span>
        <span className={user.bar}></span>
      </button>
    </nav>
  </header>
  )
}
