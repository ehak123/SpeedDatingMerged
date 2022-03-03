import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { PageHeader } from '../components/startpagechildview'
import { PageFooter } from '../components/startpagechildview'

export const siteTitle = 'STH Speed Dating'

const headish = PageHeader();

const footish = PageFooter();


export default function UpComingEvents() {
  return (
    <div className={utilStyles.container}>
      {headish}
        <main>
        <Head>
          <title> {siteTitle} </title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Welcome to Stockholm Speed Dating, your interactive and modern matchmaker-service!</p>
        </section>
        <section className={utilStyles.containerwide}>
          <div className={utilStyles.calendercard}>
            <p className={utilStyles.lighttext}> 2022-04-25 </p>
            <h3>Singles ready to mingle</h3>
            <p>Tired of searching for "the one"? Let our match-making-algorithm do the job. This is a classic Speed Dating event for everyone, infused with our world renownd concept. </p>
          </div>
          <div className={utilStyles.calendercard}>
            <p className={utilStyles.lighttext}> 2022-06-30 </p>
            <h3>Singles that likes Pringles</h3>
            <p>This event is for all you Pringles fans out there.</p>
            <p > THIS EVENT IS SPONSORED</p>
          </div>
          <div className={utilStyles.calendercard}>
            <p className={utilStyles.lighttext}> 2022-08-15 </p>
            <h3>Sailors night (gay event)</h3>
            <p>Ship-o-hoy! Are you a Red October-navy-fan or just a Captain Crook? Lets raise all sails for this navy-themed event!</p>
          </div>
          <br />
          <h3 id={utilStyles.centertext} >...more events will be added soon! <br></br>Become a member today and do not miss out! </h3>
        </section>
      </main>
      <footer >
      {footish}
      </footer>
    </div>
  )
}