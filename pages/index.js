
import Image from 'next/image'
import homeImg from './Assests/undraw_Reminder_re_fe15.png'
// import styles from '../styles/Home.module.css'
// import Home from './home'

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Your To Do List!!</h1>
          <p className="py-6 text-xl font-semibold">An Awesome, Personalized and Sophisticated System to Manage Your Daily Activities.</p>
        </div>
        <div className="card flex-shrink-0 w-xl shadow-2xl bg-base-100 shadow-teal-200">
          <div className="card-body">
            <Image src={homeImg} width={500} height={500} alt=''></Image>
          </div>
        </div>
      </div>
    </div>
  )
}
