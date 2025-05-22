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
          <h1>Alarm by Date – ▶Smart Alarms for Important Moments◀</h1>
          <p>Never miss another important moment!</p>
          <p>
            With Alarm by Date, you can set alarms based not just on time, but on exact dates — perfect for keeping track of everything from birthdays and deadlines to workouts and study sessions.
          </p>
          <p>
            Whether you’re a busy professional, a student juggling schedules, or just someone who wants to stay more organized, 
            Alarm by Date helps you stay ahead of life’s demands.
          </p>
        </section>

        <section className="why-love">
          <h2>■ Why You’ll Love It</h2>
          <ul>
            <li>Set alarms for specific dates and times, not just daily or hourly routines</li>
            <li>Organize your tasks, events, appointments, and reminders in one smart dashboard</li>
            <li>Use batch scheduling or repeat options to save time</li>
            <li>Add custom notes to each alarm to remember why it matters</li>
            <li>Intuitive and easy-to-use interface designed for productivity</li>
          </ul>
        </section>

        <section className="key-features">
          <h2>■ Key Features</h2>
          <ul>
            <li><strong>One-Time Alarms</strong> – Ideal for single-use reminders like appointments or exams</li>
            <li><strong>Multiple Date Alarms</strong> – Great for scheduling events across different dates</li>
            <li><strong>Range Alarms</strong> – Set alarms that repeat over a specific date range</li>
            <li><strong>Alarm Notes</strong> – Attach messages or instructions to each alarm for clarity</li>
            <li><strong>Notification Customization</strong> – Choose how and when you get alerted</li>
            <li><strong>Lightweight and Battery-Friendly</strong> – Efficient alarm management without draining your device</li>
          </ul>
        </section>

        <section className="perfect-for">
          <h2>■ Perfect For</h2>
          <ul>
            <li>Morning wake-up calls with motivational notes</li>
            <li>Birthday and anniversary reminders you’ll never miss</li>
            <li>Timed study sessions, workout plans, or medication tracking</li>
            <li>Daily routines or flexible schedules</li>
            <li>Work meetings, project deadlines, or client calls</li>
            <li>Anyone needing a better way to manage time and boost productivity</li>
          </ul>
        </section>

        <section className="privacy">
          <h2>■ Privacy First</h2>
          <p>
            Your data stays on your device. We respect your privacy and don’t collect any unnecessary personal information.
          </p>
        </section>

        <section className="final-thoughts">
          <p>
            With Alarm by Date, you’ll never forget what matters most. Whether personal or professional, 
            this app is your smart assistant for a more organized life — with specific-date alarms, recurring reminders, 
            and intuitive features designed to match your daily rhythm.
          </p>
          <p>
            Need a wake-up alarm, a study planner, or a reminder for that important meeting? 
            Alarm by Date has it all — ▶your personalized, powerful tool to help you stay productive and on time.
          </p>
        </section>

        <section className="contact">
          <h3>📩 Contact Us</h3>
          <p>Have feedback? Email us at <a href="mailto:thomasyounglee9@gmail.com">thomasyounglee9@gmail.com</a></p>
          <p>We’re always listening to feedback and working on new features to make your experience even better.</p>
        </section>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
