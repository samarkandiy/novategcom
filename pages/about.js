import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About Novateg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="About" />
        <p className="description">
          About
        </p>
      </main>

      <Footer />
    </div>
  )
}
