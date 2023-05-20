import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomeScreen from '../pages/HomeScreen'
import UserScreen from '../pages/UserScreen'

const MainRouter = () => {
  return (
    <BrowserRouter>
      {/* HEADER */}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/user/:login" element={<UserScreen />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
      {/* FOOTER */}
    </BrowserRouter>
  )
}

export default MainRouter