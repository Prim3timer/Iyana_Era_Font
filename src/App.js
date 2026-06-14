import Item from "./components/Item";
import AddItem from "./components/AddItem";
import EditItem from "./components/EditItem";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inventory from "./components/Inventory";
import Layout from "./components/Layout";
import Invoice from "./components/Invoice";
import Acquisition from "./components/Acquisition";
import Usage from "./components/Usage";
import Used from "./components/Used";
import UsageReceipt from "./components/UsageReceipt";
function App() {
  return (
    <main className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/">
            <Route path="/" index element={<Item />} />
            <Route path="/items" index element={<Item />} />
            <Route path="/edit-item" element={<EditItem />} />
            <Route path="/add-item" element={<AddItem />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="invoice" element={<Invoice />} />
            <Route path="acquisition" element={<Acquisition />} />
            <Route path="usage" element={<Usage />} />
            <Route path="used" element={<Used />} />
            <Route path="/usage-receipt" element={<UsageReceipt />} />
          </Route>
        </Routes>
      </div>
    </main>
  );
}

export default App;
