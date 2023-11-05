import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import EcoPage from './pages/EcoPage';
import HomePage from './pages/HomePage';
import RootLayout from './pages/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'ecosystem', element: <EcoPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
