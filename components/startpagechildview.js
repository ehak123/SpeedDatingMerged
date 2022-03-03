import Image from 'next/image'
import startpage from '../styles/startpageview.module.css'
import startpagechild from '../styles/startpagechildview.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'


const name = 'STH Speed Dating'
export const siteTitle = 'STH Speed Dating'

export function PageHeader() {
  return (
    <div className={utilStyles.container}>
      <header className={startpage.header}>
        <>
          <section id={startpage.container}>
            <Image
              priority
              src="/images/icon400x400.jpg"
              className={utilStyles.borderCircle}
              height={80}
              width={80}
              alt={name}
            />
          </section>
          <h1 className={utilStyles.headingXl}>{name}</h1>
        </>
      </header>
    </div>
  )
}


export function PageFooter() {
  return (
    <div className={startpagechild.backToHome}>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </div>
  )
}