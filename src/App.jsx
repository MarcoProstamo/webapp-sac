import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./assets/pages/HomePage";
import TripPage from "./assets/pages/TripPage";
import ContactsPage from "./assets/pages/ContactsPage";
import NotFoundPage from "./assets/pages/NotFoundPage";
import DefaultLayout from "./assets/layout/DefaultLayout";
import AddNewTripPage from "./assets/pages/AddNewTripPage";
import NewMembersPage from "./assets/pages/NewMembersPage";

export default function App() {
  // # TODO
  // Fix Bug ON Click Button in Contancts List
  // FIx Routing New Members

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout></DefaultLayout>}>
          <Route path="/trips">
            <Route index element={<HomePage></HomePage>} />
            <Route path=":id" element={<TripPage></TripPage>} />
            <Route path="newtrip" element={<AddNewTripPage></AddNewTripPage>}>
              <Route
                path=":id/newmembers"
                element={<NewMembersPage></NewMembersPage>}
              />
            </Route>
          </Route>
          <Route path="/contacts" element={<ContactsPage></ContactsPage>} />
          <Route path="*" element={<NotFoundPage></NotFoundPage>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
