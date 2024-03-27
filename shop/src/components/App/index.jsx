import HomePage from '../../pages/HomePage';
import CounterPage from '../../pages/CounterPage';
import TodosPage from '../../pages/TodosPage';
import NavBar from '../NavBar';
import Counter from '../Counter';
import TodoList from '../TodoList';
import './index.css';
import { browserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../Layout';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage />,
//   },
//   {
//     path: '/counter',
//     element: <CounterPage />,
//   },
//   {
//     path: '/todos',
//     element: <TodosPage />,
//   },
// ]);

// function App() {
//   return (
//     <RouterProvider router={router}>
//       <div></div>
//     </RouterProvider>
//   );
//   return <Layout></Layout>;
// }

function App() {
  return <Layout></Layout>;
}

export default App;
