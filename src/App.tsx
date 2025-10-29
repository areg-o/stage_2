import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Add, Dashboard } from '@/pages';
import { Layout } from '@/components';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: 'add',
        element: <Add />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
