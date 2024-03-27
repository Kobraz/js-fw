import HomePage from '../../pages/HomePage';
import CounterPage from '../../pages/CounterPage';
import TodosPage from '../../pages/TodosPage';
import { browserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Counter from '../Counter';
import TodoList from '../TodoList';
import './index.css';
import NavBar from '../NavBar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/counter',
    element: <CounterPage />,
  },
  {
    path: '/todos',
    element: <TodosPage />,
  },
]);

export default function Header() {
  return (
    <header className='page-header'>
      <logo>LOGOOO</logo>
      {/* <NavBar /> */}
      <RouterProvider router={router}>
        <div></div>
      </RouterProvider>
    </header>
  );
}
