import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import { getRoom } from '../api/rooms'
import DashboardLayOut from '../layouts/DashboardLayOut'
import AddRoom from '../pages/Dashboard/Host/AddRoom'
import MyListings from '../pages/Dashboard/Host/MyListings'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path:'/room/:id',
        element: ( <PrivateRoute> <RoomDetails></RoomDetails> </PrivateRoute> ),
         loader: ({params})=> getRoom(params.id)
      }
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {path:'/dashboard', element: <PrivateRoute> <DashboardLayOut></DashboardLayOut> </PrivateRoute> , 
     children:[
         {
          path:'add-room',
          element:<PrivateRoute> <AddRoom/> </PrivateRoute>
         },
         {
          path:'my-listings',
          element:<PrivateRoute> <MyListings/> </PrivateRoute>
         }
     ]
  }
])
