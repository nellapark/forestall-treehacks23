import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Landing from './components/landing.js';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
