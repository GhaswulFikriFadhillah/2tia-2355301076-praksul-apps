const ResultTable = ({ base, height, area }) => (
  <div className="mt-6">
    <table className="w-full border-collapse border border-gray-300 rounded-xl overflow-hidden shadow-sm">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="px-4 py-2">Alas</th>
          <th className="px-4 py-2">Tinggi</th>
          <th className="px-4 py-2">Luas</th>
        </tr>
      </thead>
      <tbody className="text-center">
        <tr>
          <td className="border px-4 py-2">{base}</td>
          <td className="border px-4 py-2">{height}</td>
          <td className="border px-4 py-2">{area}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ResultTable;
