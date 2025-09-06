function LeadList({ leads, onDeleteLead }) {
  if (leads.length === 0) {
    return (
      <p className="text-gray-500 text-center bg-white shadow-md rounded-lg p-6">
        No leads added yet. Fill the form to add leads.
      </p>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">
        Lead List
      </h2>

      <table className="min-w-full border border-gray-200 rounded-lg text-sm md:text-base">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-4 py-2 border text-left">Name</th>
            <th className="px-4 py-2 border text-left">Email</th>
            <th className="px-4 py-2 border text-left">Phone</th>
            <th className="px-4 py-2 border text-left">Notes</th>
            <th className="px-4 py-2 border text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, index) => (
            <tr key={index} className="hover:bg-blue-50">
              <td className="px-4 py-2 border">{lead.name}</td>
              <td className="px-4 py-2 border">{lead.email}</td>
              <td className="px-4 py-2 border">{lead.phone}</td>
              <td className="px-4 py-2 border">{lead.notes}</td>
              <td className="px-4 py-2 border text-center">
                <button
                  onClick={() => onDeleteLead(index)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadList;
