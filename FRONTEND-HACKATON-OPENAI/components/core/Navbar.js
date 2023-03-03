import Link from 'next/link'
import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function Navbar({ session }) {
  const [hamburguerActive, setHamburguerActive] = useState(false)

  return (
    <header className={styles['header']}>
      <nav className={`${styles['navbar']} text-dark border-b border-soft`}>
        <Link href="/" className={`${styles['nav-branding']} font-poppins`}>Filter GPT</Link>
        <ul className={ hamburguerActive ? styles["nav-menu-open"] : styles["nav-menu-close"] }>
          <li className={styles['nav-item']}>
            <Link href="" className={`${styles['nav-link']} hover:bg-back-light`}>Console</Link>
            <ul className=''>
              <li className='bg-back-light'><Link className={`${styles['nav-link']} hover:bg-back-dark hover:text-light`} href="/dashboard">A</Link></li>
              <li className='bg-back-light'><Link className={`${styles['nav-link']} hover:bg-back-dark hover:text-light`} href="/dashboard">B</Link></li>
              <li className='bg-back-light'><Link className={`${styles['nav-link']} hover:bg-back-dark hover:text-light`} href="/dashboard">C</Link></li>
              <li className='bg-back-light'><Link className={`${styles['nav-link']} hover:bg-back-dark hover:text-light`} href="/dashboard">D</Link></li>
            </ul>
          </li>
          <li className={styles['nav-item']}>
            <Link href="/profile" className={`${styles['nav-link']} hover:bg-back-light hover:text-dark`}>Register</Link>
          </li>
          <li className={styles['nav-item']}>
            <Link href="/login" className={`${styles['nav-link']} bg-soft hover:bg-back-light hover:text-dark`}>Login</Link>
          </li>
        </ul>

        <div className={styles['hamburguer']} onClick={ () => setHamburguerActive(!hamburguerActive) }>
        {
            hamburguerActive 
            ? <FontAwesomeIcon icon={faTimes}/>
            : <FontAwesomeIcon icon={faBars}/>
        }
        </div>

      </nav>
    </header>
  )
}