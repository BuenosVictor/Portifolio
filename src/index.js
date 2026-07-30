import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Hero } from './Hero-component/Hero.js';
import { ProjectsShowcase } from './ProjectsShowcase-component/ProjectsShowcase.js';
import { Strengths } from './Strengths-component/Strengths.js';
import { Skills } from './Skills-component/Skills.js';
import { AboutMe } from './AboutMe-component/AboutMe.js';
import { PageAboutMe } from './PageAboutMe-component/PageAboutMe.js';
import { ProjectsPage } from './ProjectsPage-component/ProjectsPage.js';
import { SkillsPage } from './SkillsPage-component/SkillsPage.js';
import { ExperiencePage } from './ExperiencePage-component/ExperiencePage.js';
import { ErrorPage } from './ErrorPage-component/ErrorPage.js';

/**
 * Ordem da home pensada para quem le em 40 segundos:
 * quem sou -> prova de que construo -> o que trago alem do codigo -> ferramentas -> quem sou como pessoa.
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // Cobre 404 e qualquer erro de renderizacao nas rotas filhas.
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <>
            <Hero />
            <ProjectsShowcase />
            <Strengths />
            <Skills />
            <AboutMe />
          </>
        ),
      },
      {
        path: 'projetos',
        element: <ProjectsPage />,
      },
      {
        path: 'habilidades',
        element: <SkillsPage />,
      },
      {
        path: 'experiencia',
        element: <ExperiencePage />,
      },
      {
        path: 'sobre-mim',
        element: <PageAboutMe />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
