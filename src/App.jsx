import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './routes';
import DeafaultLayout from './Layout/DefaultLayout/DefaultLayout';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          const Page = route.component
          const Layout = route.layout || DeafaultLayout
          return (
            <Route key={index} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            }/>
          )
        })}
      </Routes>
    </Router>
  )
}
export default App
