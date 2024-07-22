import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import AddJob from "./pages/AddJob";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, {jobLoader} from "./pages/JobPage";
// Layout
import MainLayout from './layouts/MainLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<HomePage/>} />
      <Route path="/jobs" element={<JobsPage/>} />
      <Route path="/jobs/:id" element={<JobPage/>} loader={jobLoader} />
      <Route path="/add-job" element={<AddJob/>} />
      <Route path="*" element={<NotFoundPage/>} />
    </Route>
  )
);

const App = () => {
  return (
      <RouterProvider router={router} />
  )
}

export default App