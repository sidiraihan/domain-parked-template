import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Domain For Sale</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Domain For Sale" />
        <p className="description">
          To buy this domain please contact <b>sidiraihan@gmail.com</b>
        </p>
      </main>
    </div>
  )
}
