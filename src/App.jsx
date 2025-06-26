import { useState } from "react";
import InputField from "./components/InputField";
import ResultTable from "./components/ResultTable";

function App() {
  const [form, setForm] = useState({ base: "", height: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.base && form.height) setSubmitted(true);
  };

  const area = 0.5 * parseFloat(form.base) * parseFloat(form.height);

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center px-6 py-10">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl ring-1 ring-indigo-200">
        <h1 className="text-3xl font-bold text-center mb-2 font-poppins">
          <span className="text-blue-700">Kal</span>
          <span className="text-blue-900">LuSeg</span>
          <span className="text-blue-700">.</span>
        </h1>
        <p className="text-base text-gray-500 text-center -mt-1 font-light">
          Kalkulator Luas Segitiga
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <InputField
            label="Alas"
            name="base"
            value={form.base}
            onChange={handleChange}
            placeholder="Masukkan nilai alas"
          />
          <InputField
            label="Tinggi"
            name="height"
            value={form.height}
            onChange={handleChange}
            placeholder="Masukkan nilai tinggi"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200"
          >
            Hitung Luas
          </button>
        </form>

        {!submitted ? (
          <p className="text-center text-gray-500 mt-6">
            Silakan isi alas dan tinggi
          </p>
        ) : (
          <ResultTable base={form.base} height={form.height} area={area} />
        )}
      </div>
    </div>
  );
}

export default App;
