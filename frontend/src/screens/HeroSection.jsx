import React from 'react'
import Button from '../components/button'

export const HeroSection = () => {
  return (
    <div className="py-3 px-5 justify-center items-center grid md:grid-cols-2 grid-cols-1 bg-gradient-to-t from-teal-100 to-transparent rounded">
    <div className="left-side text-center"> 
      <h1 className="text-2xl font-bold">
        <span className="text-center font-normal">One Destination for</span>
        <br />
        Complete Exam Prepration
      </h1>
      <ul className="flex gap-2 mt-8 justify-center ">
    <li className="flex items-center">
      Learn
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1CE26B"  className="bi bi-caret-right-fill ml-2" viewBox="0 0 16 16">
      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0  0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
    </svg>
    </li>
    <li className="flex items-center">
      Practise
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1CE26B"  className="bi bi-caret-right-fill ml-2" viewBox="0 0 16 16">
      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0  0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
    </svg>
    </li>
    <li className="flex items-center">
      Improve
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1CE26B"  className="bi bi-caret-right-fill ml-2" viewBox="0 0 16 16">
      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0  0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
    </svg>
    </li>
    <li>Succeed</li>
  </ul>
  
  <div className="mt-20 ">
    <p>Start your preparation for selections. For Free!</p>
      <div className="flex justify-center gap-4 mt-5 items-center">
        <div className='bg-gradient-to-r from-green-500 to-green-600 py-1 px-2 text-nowrap rounded-md text-white'><Button value={"Get Started for free"} /></div>
        <img src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill%3D%22%232196F3%22%20d%3D%22M8.32%207.68.58%2015.42c-.37-.35-.57-.83-.57-1.35V1.93C.01%201.4.22.92.6.56l7.72%207.12z%22%2F%3E%3Cpath%20fill%3D%22%23FFC107%22%20d%3D%22M15.01%208c0%20.7-.38%201.32-1.01%201.67l-2.2%201.22-2.73-2.52-.75-.69%202.89-2.89L14%206.33c.63.35%201.01.97%201.01%201.67z%22%2F%3E%3Cpath%20fill%3D%22%234CAF50%22%20d%3D%22M8.32%207.68.6.56C.7.46.83.37.96.29%201.59-.09%202.35-.1%203%20.26l8.21%204.53-2.89%202.89z%22%2F%3E%3Cpath%20fill%3D%22%23F44336%22%20d%3D%22M11.8%2010.89%203%2015.74c-.31.18-.66.26-1%20.26-.36%200-.72-.09-1.04-.29a1.82%201.82%200%200%201-.38-.29l7.74-7.74.75.69%202.73%202.52z%22%2F%3E%3C%2Fsvg%3E" className="w-6"/>
        <img src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20456.008%20560.035%22%3E%3Cpath%20d%3D%22M380.844%20297.529c.787%2084.752%2074.349%20112.955%2075.164%20113.314-.622%201.988-11.754%2040.191-38.756%2079.652-23.343%2034.117-47.568%2068.107-85.731%2068.811-37.499.691-49.557-22.236-92.429-22.236-42.859%200-56.256%2021.533-91.753%2022.928-36.837%201.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165%2024.516-42.554%2068.328-69.501%20115.882-70.192%2036.173-.69%2070.315%2024.336%2092.429%2024.336%2022.1%200%2063.59-30.096%20107.208-25.676%2018.26.76%2069.517%207.376%20102.429%2055.552-2.652%201.644-61.159%2035.704-60.523%20106.559M310.369%2089.418C329.926%2065.745%20343.089%2032.79%20339.498%200%20311.308%201.133%20277.22%2018.785%20257%2042.445c-18.121%2020.952-33.991%2054.487-29.709%2086.628%2031.421%202.431%2063.52-15.967%2083.078-39.655%22%2F%3E%3C%2Fsvg%3E" className="w-6 h-6"/>
      </div>
  </div>
  
    </div>
    <div className="right-side mt-20">
      <img src="https://img.freepik.com/free-vector/modern-web-design-concept-with-flat-design_23-2147856489.jpg?w=740&t=st=1725095935~exp=1725096535~hmac=2f2ff2626df054a737eb7938ee5e7a5949e50c790a05d27fa7adf9dd8f4f8f14" classNameName='rounded-xl' />
    </div>
  </div>
  )
}
