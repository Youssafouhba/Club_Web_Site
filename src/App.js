import React from 'react'
// react pages
import Main from "./main";
import Admin from "./admin";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ResetPassword from "./pages/ResetPass/PrsetPass";
import MainAdmin from "./pages/Main/main";
import Event from "./pages/Event/Event";
import Team from "./pages/Team/Team";
import Cells from "./pages/Cells/Cells";
import Account from "./pages/Account/Account";
function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/admin' element={<Admin/>} />
            <Route path='/rest' element={<ResetPassword/>} />
            <Route path='/main' element={<MainAdmin/>} />
            <Route path='/Event' element={<Event/>} />
            <Route path={'/Team'} element={<Team/>} />
            <Route path={'/Cells'} element={<Cells/>} />
            <Route path={'/Account'} element={<Account/>} />
        </Routes>
      </BrowserRouter>
  )
}
export default App