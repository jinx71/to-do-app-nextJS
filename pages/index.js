import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div className='text-center mt-10'>
      <h1 className='text-center text-3xl font-bold'>To Do App</h1>
      <h1 className="text-2xl pt-4">Your To Do List</h1>
      <form className="pt-10">
        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
        <br />
        <button type="submit" className="btn btn-primary mt-2">Submit</button>
        <div className="card my-10 mx-20 bg-green-200 text-black">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Task Name</h2>
            <p>Task description</p>
            <div className="card-actions">
              <button className="btn btn-primary">Done</button>
              <button className="btn btn-ghost">Delete</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
