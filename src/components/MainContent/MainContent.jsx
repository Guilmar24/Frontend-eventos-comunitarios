import '../../style/MainContent.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard.jsx';
import EventsList from '../Events/EventsList.jsx';
import CreateEventForm from '../Events/CreateEventForm.jsx';
import RegistrationsList from '../Registrations/RegistrationsList.jsx';
import CreateRegistrationForm from '../Registrations/CreateRegistrationForm.jsx';
import Calendar from '../Calendar/Calendar.jsx';
import BudgetsList from '../Budgets/BudgetsList.jsx';
import CreateBudgetForm from '../Budgets/CreateBudgetForm.jsx';

function MainContent() {
  return (
    <section className="content">
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/events" element={<EventsList />} />
          <Route path="/events/create" element={<CreateEventForm />} />
          <Route path="/registrations" element={<RegistrationsList />} />
          <Route path="/registrations/create" element={<CreateRegistrationForm />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/budgets" element={<BudgetsList />} />
          <Route path="/budgets/create" element={<CreateBudgetForm />} />
        </Routes>
      </div>
    </section>
  );
}

export default MainContent;
