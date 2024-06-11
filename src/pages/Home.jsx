import React from 'react'


const Home = () => {
    const subjects = [
        { name: 'HTML', icon: () => import("../assets/html.svg") },
        { name: 'CSS', icon: () => import("../assets/css.svg") },
        { name: 'JavaScript', icon: () => import("../assets/java.svg") },
        { name: 'Accessibility', icon: () => import("../assets/access.svg") }
    ];
    return (
        <div>
            <div>
                <h1>Welcome to the
                    <br />
                    Frontend Quiz!</h1>
                <p>Pick a subject to get started</p>
            </div>
            <div>
                {subjects.map((subject) => (
                    <button
                        key={subject.name}
                        className=" bg-white text-[#303D50] rounded-lg py-2 px-4 my-2 hover:bg-teal-500 transition duration-300 w-48 text-lg"
                    >
                        {subject.icon} {subject.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Home;
