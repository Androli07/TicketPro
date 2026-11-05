import { Routes, Route } from "react-router";
import { TicketsPage } from "./pages/TicketsPage";
import { TicketDetailPage } from "./pages/TicketDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TicketsPage />} />
      <Route path="/tickets/:id" element={<TicketDetailPage />} />
    </Routes>
  );
}

export default App;
