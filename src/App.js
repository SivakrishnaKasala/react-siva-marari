import { Navigate, Route, Routes } from "react-router-dom";
import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </div>
  );
}

export default App;
