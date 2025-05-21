import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Alarm by Date!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="image-container">
        <Header title="Welcome to Alarm by Date!" />
        <p className="text-overlay">여기에 원하는 텍스트 입력</p>
        <img src="/test.jpg" alt="테스트 이미지" />
        
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
