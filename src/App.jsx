import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import AddJob from "./pages/AddJob";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, {jobLoader} from "./pages/JobPage";
import EditJob from './pages/EditJob';
// Layout
import MainLayout from './Layouts/MainLayout';




const App = () => {

  // Function for Adding the Job
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob)
    })
    return;
  }

  // Function for Deleting the Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    })
    return;
  }

  // Function for Updating the Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job)
    })
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path="/jobs" element={<JobsPage/>} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="/edit-job/:id" element={<EditJob updateJobSubmit={updateJob}/>} loader={jobLoader} />
        <Route path="/add-job" element={<AddJob addJobSubmit={addJob} />}  />
        <Route path="*" element={<NotFoundPage/>} />
      </Route>
    )
  );

  return (
      <RouterProvider router={router} />
  )
}

export default App
