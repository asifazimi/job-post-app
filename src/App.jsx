import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import AddJob from "./pages/AddJob";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, {jobLoader} from "./pages/JobPage";
// Layout
import MainLayout from './layouts/MainLayout';




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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path="/jobs" element={<JobsPage/>} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
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