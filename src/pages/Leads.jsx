import { useState } from "react";
import LeadForm from "../components/LeadForm";
import LeadList from "../components/LeadList";

function Leads() {
  const [leads, setLeads] = useState([]);

  const handleAddLead = (newLead) => {
    setLeads([...leads, newLead]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Lead Management
      </h1>

      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 mb-8">
        <LeadForm onAddLead={handleAddLead} />
      </div>

      <div className="w-full max-w-3xl">
        <LeadList leads={leads} />
      </div>
    </div>
  );
}

export default Leads;
