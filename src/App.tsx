import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from '@/components';
import { Add, Dashboard } from '@/pages';

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
