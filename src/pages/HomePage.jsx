// components
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListingPosts from "../components/JobListingPosts";
import ViewAllJobs from "../components/ViewAllJobs";


const HomePage = () => {
  return (
    <>
        <Hero/>
        <HomeCards/>
        <JobListingPosts isHome = "true" />
        <ViewAllJobs/>
    </>
  )
}

export default HomePage