import Image from 'next/image'

const _landing = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Your To Do List!!</h1>
                    <p className="py-6 text-xl font-semibold">An Awesome, Personalized and Sophisticated System to Manage Your Daily Activities.</p>
                </div>
                <div className="card flex-shrink-0 w-xl shadow-2xl bg-base-100 shadow-teal-200">
                    <div className="card-body">
                        <Image src='/../public/undraw_Reminder_re_fe15.png' width={500} height={500} alt=''></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default _landing;