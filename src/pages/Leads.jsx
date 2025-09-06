import { useState, useEffect } from "react";
import LeadForm from "../components/LeadForm";
import LeadList from "../components/LeadList";
import Navbar from "../components/Navbar";

function Leads() {
    const [leads, setLeads] = useState([]);

    // Load from localStorage on mount
    useEffect(() => {
        const storedLeads = JSON.parse(localStorage.getItem("leads")) || [];
        setLeads(storedLeads);
    }, []);

    // Save to localStorage whenever leads change
    useEffect(() => {
        localStorage.setItem("leads", JSON.stringify(leads));
    }, [leads]);

    // Add new lead
    const handleAddLead = (lead) => {
        setLeads([...leads, { id: Date.now(), ...lead }]);
    };

    // Delete lead
    const handleDeleteLead = (id) => {
        setLeads(leads.filter((lead) => lead.id !== id));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10 px-6">
            <header className="w-full mb-10">
                <Navbar />
            </header>
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Lead Capture Form */}
                <LeadForm onAddLead={handleAddLead} />

                {/* Lead List */}
                <LeadList leads={leads} onDeleteLead={handleDeleteLead} />
            </div>
        </div>
    );
}

export default Leads;
