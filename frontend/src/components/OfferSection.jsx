import React from 'react'

export const OfferSection = () => {
  return (
    <div class="py-3 px-5 mt-12 ">
        <div >
            <h1 class="font-bold text-3xl text-blue-950">What We Offer</h1>
        </div>
        <div class="grid sm:grid-cols-3 grid-cols-1 gap-4">
            <div class="mt-10 border p-4 rounded-xl  hover:bg-blue-900 hover:text-white transform transition-transform duration-300 hover:scale-105">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="Pink" class="bi bi-book-half" viewBox="0 0 16 16">
        <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
        </svg>
            <h3 class="font-semibold text-lg">Live Tests</h3>
            <p class="mt-2">Take live test on time, You can take the missed test from dashboard.</p>

            </div>
        </div>
        <div class="mt-10 border p-4 rounded-xl hover:bg-blue-900 hover:text-white transform transition-transform duration-300 hover:scale-105">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="Red" class="bi bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
        </svg>
            <h3 class="font-semibold text-lg">High Yields Questions</h3>
            <p class="mt-2">Take live test on time, You can take the missed test from dashboard.</p>

            </div>
        </div>

        <div class="mt-10 border  p-4 rounded-xl hover:bg-blue-900 hover:text-white transform transition-transform duration-300 hover:scale-105">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="Red" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
        </svg>
            <h3 class="font-semibold text-lg">Insightful Analytics</h3>
            <p class="mt-2">Take live test on time, You can take the missed test from dashboard.</p>

            </div>
        </div>
        </div>
  
    </div>
  )
}
