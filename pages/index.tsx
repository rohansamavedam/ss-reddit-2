import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Reddit Clone</title>
      </Head>
      <div>
        <Header/>
      </div>
    </>
  )
}
