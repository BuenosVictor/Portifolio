import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Introduction } from './Introduction-component/Introduction.js'
import { ProjectsCarousel } from './ProjectsCarousel-component/ProjectsCarousel.js';
import { SkillsAndAboutMe } from './SkillsAndAboutMe-component/SkillsAndAboutMe.js';
import { PageAboutMe } from './PageAboutMe-component/PageAboutMe.js';
import { ProjectsPage } from './ProjectsPage-component/ProjectsPage.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:
          <>
            <Introduction />
            <ProjectsCarousel />
            <SkillsAndAboutMe />
          </>
      },
      {
        path:"/sobre-mim",
        element:<PageAboutMe/>,
      },
      {
        path:"/projetos",
        element:<ProjectsPage/>,
      }
    ]

  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);