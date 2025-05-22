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
        
    

        <p className="description">
    Alarm by Date – ▶Smart Alarms for Important Moments◀

Never miss another important moment!

With Alarm by Date, you can set alarms based not just on time, 
but on exact dates — perfect for keeping track of everything from birthdays and deadlines to workouts and study sessions.

Whether you’re a busy professional, a student juggling schedules, or just someone who wants to stay more organized, 
Alarm by Date helps you stay ahead of life’s demands.

■Why You’ll Love It

• Set alarms for specific dates and times, not just daily or hourly routines
• Organize your tasks, events, appointments, and reminders in one smart dashboard
• Use batch scheduling or repeat options to save time
• Add custom notes to each alarm to remember why it matters
• Intuitive and easy-to-use interface designed for productivity

■Key Features

• One-Time Alarms – Ideal for single-use reminders like appointments or exams
• Multiple Date Alarms – Great for scheduling events across different dates
• Range Alarms – Set alarms that repeat over a specific date range
• Alarm Notes – Attach messages or instructions to each alarm for clarity
• Notification Customization – Choose how and when you get alerted
• Lightweight and Battery-Friendly – Efficient alarm management without draining your device

■Perfect For

• Morning wake-up calls with motivational notes
• Birthday and anniversary reminders you’ll never miss
• Timed study sessions, workout plans, or medication tracking
• Daily routines or flexible schedules
• Work meetings, project deadlines, or client calls
• Anyone needing a better way to manage time and boost productivity

■Privacy First

Your data stays on your device. We respect your privacy and don’t collect any unnecessary personal information.

With Alarm by Date, you’ll never forget what matters most. Whether personal or professional, 
this app is your smart assistant for a more organized life — with specific-date alarms, recurring reminders, 
and intuitive features designed to match your daily rhythm.

Need a wake-up alarm, a study planner, or a reminder for that important meeting? 
Alarm by Date has it all — ▶your personalized, powerful tool to help you stay productive and on time.

Contact us: thomasyounglee9@gmail.com

We’re always listening to feedback and working on new features to make your experience even better.
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
