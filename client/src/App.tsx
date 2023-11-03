import './App.css'
import Nav from './components/Nav/Nav';
import SignIn from './components/auth/SignIn';
import Login from './components/auth/Login';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
          <Route path="signin" element={<SignIn />} />
          <Route path="login" element={<Login />} />
        </Routes>
    </div>
  )
}
