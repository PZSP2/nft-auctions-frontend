import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route element={<h2>cos</h2>} path="/" />
      <Route element={<h2>login</h2>} path="/login" />
      <Route element={<h2>register</h2>} path="/register" />
      <Route element={<h2>market</h2>} path="/market" />
    </Routes>
  );
};

export default App;
