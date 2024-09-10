import React from 'react'
import Button from '../components/button'

export const CoachingDescription = () => {
  return (
    <div className="mt-12 grid items-center gap-8 px-8 py-4 sm:grid-cols-2">
    <div>
      <img src="https://media.istockphoto.com/id/1366724877/photo/rear-view-of-mature-teacher-talking-to-his-student-during-lecture-at-university-classroom.jpg?s=612x612&w=0&k=20&c=PYpAFHxiUKX2i1D8w_ElnGsm1B64GBleyF-DfYTLcN0=" className="h-80 rounded-xl border border-blue-600 p-1" />
    </div>
  
    <div className="text-center">
      <div className="flex items-center justify-center gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="red" className="bi bi-person-check-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />
          <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>
        <h1 className="text-center text-3xl font-bold text-blue-600">Super Coaching by India's Best Teacher</h1>
      </div>
      <p className="mt-4 bg-gradient-to-r from-indigo-800 via-purple-600 to-pink-500 bg-clip-text text-transparent">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur minus debitis quae nesciunt? Doloribus assumenda, molestiae quaerat id quidem cupiditate molestias perferendis quisquam deserunt. Temporibus reprehenderit reiciendis at tenetur commodi.</p>
      <div className="mt-4 text-nowrap rounded-md bg-gradient-to-r from-blue-500 to-blue-800 px-8 py-2 text-white"><Button value={"Get Started"} /></div>
    </div>
  </div>
  
  )
}
