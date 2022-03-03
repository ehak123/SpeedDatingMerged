import Head from 'next/head'
import Image from 'next/image'
import startpage from '../styles/startpageview.module.css'
import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'

import Link from 'next/link'
import Date from '../components/date'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


const name = 'STH Speed Dating'
export const siteTitle = 'STH Speed Dating'

export default function StartPageView({ allPostsData }) {
  return (
    <div>
      <div className={utilStyles.container}>
        <header className={startpage.header}>
          <>
            <section clasName={startpage.container}>
              <Image
                priority
                src="/images/icon400x400.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
            </section>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        </header>
        <main>
          <Head>
            <title> {siteTitle} </title>
          </Head>
          <section className={utilStyles.headingMd}>
            <p>Welcome to Stockholm Speed Dating, your interactive and modern matchmaker-service!</p>
          </section>
          <section className={utilStyles.grid, utilStyles.container}>
            <a href="" className={utilStyles.card} disabled={this}>
              <h3>Become a member today &rarr;</h3>
              <p>Join our dating comunity and find your soulmate</p>
            </a>

            <a href="./login" className={utilStyles.card}>
              <h3>Log in &rarr;</h3>
              <p>Log in in order to sign up to new exiting events</p>
            </a>

            <a href="./upcomingevents" className={utilStyles.card}>
              <h3>Coming Speed Dating events &rarr;</h3>
              <p>Check out all our fun up-comming event here!</p>
            </a>
          </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>News</h2>
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={'../pages/posts/${id}'}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
      <a href="" id={startpage.adminlogin}> Admin: log in </a>
    </div>
  )
}