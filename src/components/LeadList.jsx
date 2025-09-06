function LeadList({ leads }) {
  if (leads.length === 0) {
    return (
      <p className="text-gray-500 text-center">
        No leads added yet. Fill the form to add leads.
      </p>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Lead List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Phone</th>
              <th className="px-4 py-2 border">Notes</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{lead.name}</td>
                <td className="px-4 py-2 border">{lead.email}</td>
                <td className="px-4 py-2 border">{lead.phone}</td>
                <td className="px-4 py-2 border">{lead.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeadList;
