import React, { useContext, useEffect } from 'react';
// import '../styles/globals.css'
import Router from 'next/router';
import { useRouter } from 'next/router'
import useSWR from 'swr'
import TaskBody from './_taskBody';
import { usercontext } from '../Contex/Authcontext';
const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Home = () => {
    const { user } = useContext(usercontext)
    console.log(user)
    const userEmail = user?.email
    const router = useRouter();
    function dateTime() {
        let dateTimeArray = [];
        let dateTimeString = new Date(Date.now());
        let time = dateTimeString.toLocaleTimeString('en-uk', { hour12: false });
        let date = dateTimeString.toLocaleDateString('en-uk', { year: "numeric", month: "short", day: "numeric" });
        dateTimeArray.push(time, date);

        return dateTimeArray;
    }
    console.log(dateTime())
    function timeConvert(time) {
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) { // If time format correct
            time = time.slice(1);  // Remove full string match value
            time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(''); // return adjusted time or original string
    }


    useEffect(() => {
        if (user) {
            Router.push("/home");
        } else if (user == null) {
            Router.push({
                pathname: '/login'
            }
            )
        }
        const interval = setInterval(() => {

            const timeData = (timeConvert(dateTime()[0]))
            setTime.value = timeData;
        }, 1000);
        return () => clearInterval(interval);
    }, [user]);



    const { data, error } = useSWR(`https://todo-list-server-six.vercel.app/todo?email=${userEmail}`, fetcher,
        { refreshInterval: 1000 })
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    console.log(data)




    if (!user) {
        // user is signed out or still being checked.
        // don't render anything
        return null;
    }


    const handleAddTask = (event) => {
        event.preventDefault()
        const data = {}
        data.taskDescription = event.target.taskDescription.value
        data.taskPriority = event.target.taskPriority.value
        data.taskTime = event.target.taskTime.value
        data.taskDate = event.target.taskDate.value
        data.email = userEmail
        data.isComplete = false
        console.log(data)
        fetch(`https://todo-list-server-six.vercel.app/todo `,
            {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(data)
            }
        )
    }
    const handleRemoveTask = (id) => {
        fetch(`https://todo-list-server-six.vercel.app/todo/${id} `,
            {
                method: "delete",
            }
        )
    }
    const handleTaskComplete = (id) => {
        fetch(`https://todo-list-server-six.vercel.app/todo/${id} `,
            {
                method: "put"

            }
        )
    }
    return (
        <>
            <header>
                <h1 className="text-center text-5xl font-extralight">Make Your Task Schedule</h1>
            </header>
            <main className="w-3/4 mx-auto mt-5">
                <div>
                    <form action="" onSubmit={handleAddTask}>
                        <div className="w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                            <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                                <label for="task" className="sr-only">Task List</label>
                                <textarea id="task" rows="4" className="p-5 w-full text-sm text-gray-900 bg-white border-0"
                                    placeholder="Write your task..." name="taskDescription"></textarea>
                            </div>
                            <div
                                className="flex justify-center items-center md:justify-between flex-col md:flex-row w-full py-2 px-3.5 border-t dark:border-gray-600">
                                <button id="addTaskButton"
                                    className="px-2.5 py-4 mt-2 md:mt-0 text-xs w-full md:w-1/4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                    Add Task
                                </button>
                                <button id="updateButton"
                                    className="px-2.5 py-4 mt-2 md:mt-0 text-xs w-full md:w-1/4 font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-700 hidden">
                                    Update
                                </button>
                                <div
                                    className="flex justify-center items-center md:justify-end flex-col md:flex-row w-full pl-0 space-x-1">
                                    <input type="text" id="setTime"
                                        className=" text-xs px-2.5 py-3.5 mt-2 md:mt-0 w-full md:w-1/4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                                        placeholder="Select time" name="taskTime" />

                                    <input datepicker datepicker-autohide datepicker-format="dd/mm/yyyy" type="text" id="setDate"
                                        className=" text-xs w-full px-2.5 py-4 mt-2 md:mt-0 md:w-1/4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                                        placeholder="Select date" name="taskDate" value={dateTime()[1]} />

                                    <select id="setPriority"
                                        className="px-2.5 py-3.5 mt-2 md:mt-0 w-full text-xs  md:w-1/4 font-medium  text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" name="taskPriority">
                                        {/* <option selected="">Set Priority</option> */}
                                        <option value="Urgent">Urgent</option>
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>

                                </div>
                            </div>
                        </div>
                    </form>

                </div>
                <div>
                    <ol id="taskBody" className="taskBody list-decimal list-outside">
                        {data.map((mappedData, idx) =>
                            <TaskBody
                                key={mappedData._id}
                                task={mappedData}
                                idx={idx}
                                removeTask={handleRemoveTask}
                                taskComplete={handleTaskComplete}>
                            </TaskBody>)}
                    </ol >
                </div >
            </main >
        </>
    );
};

export default Home;