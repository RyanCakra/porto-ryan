import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Works from './pages/WorksPage';
import Projects from './pages/ProjectsPage';
import './index.css';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/works',
      element: <Works />,
    },
    {
      path: '/projects',
      element: <Projects />,
    },
  ]);

  return (
    <RouterProvider router={router}>
      <AnimatePresence mode="wait">
        <Routes />
      </AnimatePresence>
    </RouterProvider>
  );
};

const Routes = () => {
  return (
    <>
      <Route
        path="/"
        element={
          <PageWrapper>
            <Home />
          </PageWrapper>
        }
      />
      <Route
        path="/about"
        element={
          <PageWrapper>
            <About />
          </PageWrapper>
        }
      />
      <Route
        path="/works"
        element={
          <PageWrapper>
            <Works />
          </PageWrapper>
        }
      />
      <Route
        path="/projects"
        element={
          <PageWrapper>
            <Projects />
          </PageWrapper>
        }
      />
    </>
  );
};

const pageTransition = {
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  out: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const PageWrapper = ({ children }) => (
  <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
    {children}
  </motion.div>
);

export default App;
