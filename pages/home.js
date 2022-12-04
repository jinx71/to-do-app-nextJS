import React from 'react';
// import '../styles/globals.css'
const home = () => {
    return (
        <>
            <header>
                <h1 className="text-center text-5xl font-extralight">Make Your Task Schedule</h1>
            </header>
            <main className="w-3/4 mx-auto mt-5">
                <div>
                    <div className="w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                        <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                            <label for="task" className="sr-only">Task List</label>
                            <textarea id="task" rows="4" className="p-5 w-full text-sm text-gray-900 bg-white border-0"
                                placeholder="Write your task..."></textarea>
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
                                <input type="time" id="setTime"
                                    className=" text-xs px-2.5 py-3.5 mt-2 md:mt-0 w-full md:w-1/4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                                    placeholder="Select time" />

                                <input datepicker datepicker-autohide datepicker-format="dd/mm/yyyy" type="text" id="setDate"
                                    className=" text-xs w-full px-2.5 py-4 mt-2 md:mt-0 md:w-1/4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                                    placeholder="Select date" />

                                <select id="setPriority"
                                    className="px-2.5 py-3.5 mt-2 md:mt-0 w-full text-xs  md:w-1/4 font-medium  text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                    <option selected="">Set Priority</option>
                                    <option value="Urgent">Urgent</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>

                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <ol id="taskBody" className="taskBody list-decimal list-outside">
                        <li className='my-5'>
                            <div
                                className="flex items-center justify-center px-4 text-5xl font-semibold text-center text-gray-400 bg-gray-300 rounded-lg">
                                <span>#1</span>
                            </div>
                            <div className="taskItem bg-white border border-3 p-6 pt-2 rounded-lg shadow-lg mt-5">
                                <div className="flex justify-end space-x-2">
                                    <div
                                        className="flex items-center justify-center px-4 text-xs font-semibold text-center text-white bg-pink-300 rounded-full hover:bg-pink-500">
                                        <span>10:12 AM</span>
                                    </div>
                                    <div
                                        className="flex items-center justify-center px-2 py-0.5 text-xs font-semibold text-center text-white bg-green-300 rounded-full hover:bg-green-500">
                                        <span>10 Aug, 2022</span>
                                    </div>
                                    <div
                                        className="flex items-center justify-center px-2 py-0.5 text-xs font-semibold text-center text-white bg-purple-300 rounded-full hover:bg-purple-500">
                                        <span>Medium</span>
                                    </div>
                                </div>
                                <h2 className="text-2xl font-light mb-2 p-2.5 text-gray-800">Lorem ipsum dolor sit
                                    amet consectetur
                                    adipisicing elit. Accusantium enim nulla eaque amet qui ut veritatis dignissimos asperiores,
                                    ipsa nesciunt culpa aspernatur repudiandae, debitis, officia recusandae impedit voluptatum
                                    nostrum illo.</h2>
                                <div
                                    className="flex justify-center items-center md:justify-between flex-col md:flex-row w-full pb-2.5 px-3.5">


                                    <button type="submit" id="edit"
                                        className="px-2.5 py-4 mt-2 md:mt-0 text-xs w-full md:w-1/4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                        Edit Task
                                    </button>
                                    <button type="submit" id="remove"
                                        className="px-2.5 py-4 mt-2 md:mt-0 text-xs w-full md:w-1/4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                        Remove Task
                                    </button>
                                    <button type="submit" id="remove"
                                        className="px-2.5 py-4 mt-2 md:mt-0 text-xs w-full md:w-1/4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                        Completed
                                    </button>

                                </div>
                            </div>
                        </li>
                        <li className='my-5'>
                            <div
                                className="flex items-center justify-center px-4 text-5xl font-semibold text-center text-gray-400 bg-gray-300 rounded-lg">
                                <span>#1</span>
                            </div>
                            <div className="taskItem bg-white border border-3 p-6 pt-2 rounded-lg shadow-lg mt-5">
                                <div className="flex justify-end space-x-2">
                                    <div
                                        className="flex items-center justify-center px-4 text-xs font-semibold text-center text-white bg-pink-300 rounded-full hover:bg-pink-500">
                                        <span>10:12 AM</span>
                                    </div>
                                    <div
                                        className="flex items-center justify-center px-2 py-0.5 text-xs font-semibold text-center text-white bg-green-300 rounded-full hover:bg-green-500">
                                        <span>10 Aug, 2022</span>
                                    </div>
                                    <div
                                        className="flex items-center justify-center px-2 py-0.5 text-xs font-semibold text-center text-white bg-purple-300 rounded-full hover:bg-purple-500">
                                        <span>Medium</span>
                                    </div>
                                </div>
                                <h2 className="text-2xl font-light mb-2 p-2.5 text-gray-800">Lorem ipsum dolor sit
                                    amet consectetur
                                    adipisicing elit. Accusantium enim nulla eaque amet qui ut veritatis dignissimos asperiores,
                                    ipsa nesciunt culpa aspernatur repudiandae, debitis, officia recusandae impedit voluptatum
                                    nostrum illo.</h2>
                                <div
                                    className="flex justify-center items-center md:justify-between flex-col md:flex-row w-full pb-2.5 px-3.5">


                                    <button type="submit" id="edit"
                                        className="px-2.5 py-4 mt-2 md:mt-0 text-xs w-full md:w-1/4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                        Edit Task
                                    </button>
                                    <button type="submit" id="remove"
                                        className="px-2.5 py-4 mt-2 md:mt-0 text-xs w-full md:w-1/4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                        Remove Task
                                    </button>
                                    <button type="submit" id="remove"
                                        className="px-2.5 py-4 mt-2 md:mt-0 text-xs w-full md:w-1/4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                        Completed
                                    </button>

                                </div>
                            </div>
                        </li>
                    </ol >
                </div >
            </main >
        </>
    );
};

export default home;