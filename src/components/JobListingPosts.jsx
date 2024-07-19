// eslint-disable-next-line no-unused-vars
import {React, useState, useEffect} from 'react'
// Job Lists
import JobListingPost from './JobListingPost';
// Loading Component
import Spinners from './Spinners';

const JobListingPosts = ({isHome = false}) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiURL = isHome ? "/api/jobs?_limit=3" : "/api/jobs/"
     try {
      const res = await fetch(apiURL);
      const data = await res.json();
      setJobs(data);
     }catch (e) {
      console.log("Failed to fetch jobs", e);
     } finally {
      setLoading(false);
     }
    };

    fetchJobs();

  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"} 
        </h2>
            {
              loading ? <Spinners loading={loading} /> : <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                jobs.map((job) =>
                {
                  return (
                      <JobListingPost key={job.id} job={job} />                 
                  )
                }
                )
            }
              </div>
                
              
            }
      </div>
    </section>
  )
}

export default JobListingPosts