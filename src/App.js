import React from "react";

import UserPage from "./pages/UserPage/UserPage";
import { Route, BrowserRouter, Routes, useParams } from "react-router-dom";
import UsersPage from "./pages/UserPage/UsersPage";
import { useSelector } from "react-redux";

const App = () => {
  const users = useSelector((state) => state.fetchUsers.users);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/users/:id" element={<UsersPage users={users} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
