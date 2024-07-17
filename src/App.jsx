// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListingPosts from './components/JobListingPosts'
import ViewAllJobs from './components/ViewAllJobs'


const App = () => {

  return (
    <>
      <Navbar/>       
      <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs" />
      <HomeCards/>
      <JobListingPosts/>
      <ViewAllJobs/>
    </>
  )
}

export default App