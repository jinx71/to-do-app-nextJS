import React from 'react';

const TaskBody = ({ task, idx, removeTask, taskComplete }) => {
    return (

        // <>trap</>
        <>
            <li className='my-5'>
                <div
                    className="flex items-center justify-center px-4 text-5xl font-semibold text-center text-gray-400 bg-gray-300 rounded-lg">
                    <span>#{idx + 1}</span>
                </div>
                <div className={task?.isComplete ? "taskItem bg-green-300 border border-3 p-6 pt-2 rounded-lg shadow-lg mt-5" : "taskItem bg-yellow-100 border border-3 p-6 pt-2 rounded-lg shadow-lg mt-5"}>
                    <div className="flex justify-end space-x-2">
                        <div
                            className="flex items-center justify-center px-4 text-xs font-semibold text-center text-white bg-pink-300 rounded-full hover:bg-pink-500">
                            <span>{task?.taskTime}</span>
                        </div>
                        <div
                            className="flex items-center justify-center px-2 py-0.5 text-xs font-semibold text-center text-white bg-green-300 rounded-full hover:bg-green-500">
                            <span>{task?.taskDate}</span>
                        </div>
                        <div
                            className="flex items-center justify-center px-2 py-0.5 text-xs font-semibold text-center text-white bg-purple-300 rounded-full hover:bg-purple-500">
                            <span>{task?.taskPriority}</span>
                        </div>
                    </div>
                    <h2 className="text-2xl font-light mb-2 p-2.5 text-gray-800">{task?.taskDescription}</h2>
                    <div
                        className="flex justify-center items-center md:justify-between flex-col md:flex-row w-full pb-2.5 px-3.5">


                        <button type="submit" id="edit"
                            className="px-2.5 py-4 mt-2 md:mt-0 text-xs w-full md:w-1/4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Edit Task
                        </button>
                        <button type="submit" id="remove"
                            className="px-2.5 py-4 mt-2 md:mt-0 text-xs w-full md:w-1/4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" onClick={() => removeTask(task?._id)}>
                            Remove Task
                        </button>
                        <button type="submit" id="remove"
                            className="px-2.5 py-4 mt-2 md:mt-0 text-xs w-full md:w-1/4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" onClick={() => taskComplete(task?._id)}>
                            Completed
                        </button>

                    </div>
                </div>
            </li>
        </>


    );
};

export default TaskBody;