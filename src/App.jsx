import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./assets/pages/HomePage";
import TripPage from "./assets/pages/TripPage";
import ContactsPage from "./assets/pages/ContactsPage";
import NotFoundPage from "./assets/pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/trips">
          <Route index element={<HomePage></HomePage>} />
          <Route path=":id" element={<TripPage></TripPage>} />
        </Route>
        <Route path="/contacts" element={<ContactsPage></ContactsPage>} />
        <Route path="*" element={<NotFoundPage></NotFoundPage>} />
      </Routes>
    </BrowserRouter>
  );
}
