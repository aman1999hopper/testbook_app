import React from "react";
import Button from "../components/button";

export const AppUsers = () => {
    return(
        <div className="grid sm:grid-cols-2 py-4 px-8 gap-8 items-center mt-12">
            <div className="text-center">
                <div className="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="blue" className="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16">
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0"/>
            </svg>
                <h1 className="text-center font-bold text-3xl text-blue-600">6k Student's Using The Application!</h1>
                </div>
                <p className="mt-4 bg-gradient-to-r from-indigo-800 via-purple-600 to-pink-500 bg-clip-text text-transparent">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur minus debitis quae nesciunt? Doloribus assumenda, molestiae quaerat id quidem cupiditate molestias perferendis quisquam deserunt. Temporibus reprehenderit reiciendis at tenetur commodi.
                </p>
                <div className='bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-8 text-nowrap rounded-md text-white mt-4'><Button value={"Get Started"} /></div>
            </div>
            <div>
                <img src="https://preview.uideck.com/items/appvilla/assets/images/app-ss/app-ss1.png" />
            </div>
        </div>
    )
}