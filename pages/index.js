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

      <main>
        <Header title="Welcome to Alarm by Date!" />

        <section className="intro">
          <h1>Alarm by Date – Smart Alarms for Important Moments</h1>
          <p>Never miss another important moment!</p>
          <p>With Alarm by Date, you can set alarms based not just on time, but on exact dates — perfect for keeping track of everything from birthdays and deadlines to workouts and study sessions.</p>
        </section>

        <section className="features">
          <h2>🔹 Why You’ll Love It</h2>
          <ul>
            <li>Set alarms for specific dates and times, not just daily routines</li>
            <li>Organize tasks, events, and reminders in one smart dashboard</li>
            <li>Use batch scheduling or repeat options to save time</li>
            <li>Add custom notes to each alarm for clarity</li>
            <li>Intuitive interface designed for productivity</li>
          </ul>
        </section>

        <section className="privacy">
          <h2>🔹 Privacy First</h2>
          <p><strong>Your data stays on your device.</strong> We respect your privacy and don’t collect unnecessary personal information.</p>
        </section>

        <section className="contact">
          <h3>📩 Contact Us</h3>
          <p>Have feedback? Email us at <a href="mailto:thomasyounglee9@gmail.com">thomasyounglee9@gmail.com</a></p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
