import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { PageHeader } from '../components/startpagechildview'
import { PageFooter } from '../components/startpagechildview'
import { App } from '../components/login/App'

export const siteTitle = 'STH Speed Dating'

const headish = PageHeader();

const footish = PageFooter();


export default function Login() {
  return (
    <div className={utilStyles.container}>
      {headish}
        <main>
        <Head>
          <title> {siteTitle} </title>
        </Head>
        <section className={utilStyles.containerwide}>
        <App/>
        </section>
      </main>
      <footer >
      {footish}
      </footer>
    </div>
  )
}