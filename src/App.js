import { useState } from "react";

export default function App() {
  // Input states for aa, bb, cc, dd, vv, xx, yy, zz, oo
  const [aa, setAa] = useState("");
  const [bb, setBb] = useState("");
  const [cc, setCc] = useState("");
  const [dd, setDd] = useState("");
  const [vv, setVv] = useState("");
  const [xx, setXx] = useState("");
  const [yy, setYy] = useState("");
  const [zz, setZz] = useState("");
  const [oo, setOo] = useState("");
  
  const [results, setResults] = useState([]);

  const calculate = () => {
    // Parse inputs as integers
    const parsedAA = parseInt(aa);
    const parsedBB = parseInt(bb);
    const parsedCC = parseInt(cc);
    const parsedDD = parseInt(dd);
    const parsedVV = parseInt(vv);
    const parsedXX = parseInt(xx);
    const parsedYY = parseInt(yy);
    const parsedZZ = parseInt(zz);
    const parsedOO = parseInt(oo);

    // Calculate conversion values (inches conversion)
    const a = (parsedAA * 12) + parsedBB;
    const b = (parsedCC * 12) + parsedDD;
    const c = (parsedVV * 12) + parsedXX;
    const d = (parsedYY * 12) + parsedZZ;

    let count = 0;
    const res = [];

    for (let e = a; e <= b; e++) {
      for (let f = c; f <= d; f++) {
        const g = e;
        const h = f;
        const i = (g * h) / 144;
        const j = Math.floor(g / 12);
        const k = g % 12;
        const l = Math.floor(h / 12);
        const m = h % 12;
        let aysh = Math.ceil((i * 9) % 120);
        if (aysh === 0) aysh = 120;
        let adym = Math.ceil((i * 8) % 12);
        if (adym === 0) adym = 12;
        let karch = Math.ceil((i * 3) % 8);
        if (karch === 0) karch = 8;
        let aym = Math.ceil((i * 9) % 8);
        if (aym === 0) aym = 8;
        let nak = Math.ceil((i * 8) % 27);
        if (nak === 0) nak = 27;
        let vrm = Math.ceil((i * 9) % 7);
        if (vrm === 0) vrm = 7;
        let tidhi = Math.ceil((i * 6) % 30);
        if (tidhi === 0) tidhi = 30;
        let dikpth = Math.ceil((i * 9) % 8);
        if (dikpth === 0) dikpth = 8;
        let amsa = Math.ceil((i * 6) % 9);
        if (amsa === 0) amsa = 9;
        let ygm = Math.ceil((i * 4) % 27);
        if (ygm === 0) ygm = 27;
        let karnm = Math.ceil((i * 5) % 7);
        if (karnm === 0) karnm = 7;
        let thvm = Math.ceil((i * 7) % 5);
        if (thvm === 0) thvm = 5;
        let kulm = Math.ceil((i * 9) % 4);
        if (kulm === 0) kulm = 4;
        let lagnam = Math.ceil((i * 9) % 12);
        if (lagnam === 0) lagnam = 12;
        const n = nak;
        const o = Math.ceil(adym - karch);

        // Check conditions
        if (
          o > 1 &&
          [2, 3, 4, 6, 7, 9, 12].includes(lagnam) &&
          [1, 2].includes(thvm) &&
          [3, 4, 5, 6].includes(karnm) &&
          [1, 4, 5, 6, 8, 9, 10, 13, 14, 15, 16, 17, 19, 21, 22, 23, 24, 25].includes(ygm) &&
          [2, 3, 7, 8, 9].includes(amsa) &&
          [1, 5, 6, 7, 8].includes(dikpth) &&
          [2, 3, 5, 7, 10, 11, 13, 14, 15, 16, 17, 18, 20, 22, 25, 26, 28].includes(tidhi) &&
          [2, 4, 5, 6].includes(vrm) &&
          aysh > 60 &&
          (aym % 2 !== 0) &&
          [0, 1, 10, 19, 2, 11, 20, 4, 13, 22, 6, 15, 24, 8, 17, 26, -1, -10, -19, -3, -12, -21, -5, -14, -23, -7, -16, -25, -8, -17, -26].includes(parsedOO - n)
        ) {
          count++;
          res.push({
            count,
            area: i.toFixed(2),
            dims: `(${j}-${k} ${l}-${m})`,
            nak,
            aysh,
            adym,
            karch,
            aym,
            vrm,
            tidhi,
            dikpth,
            amsa,
            ygm,
            karnm,
            thvm,
            kulm,
            lagnam,
          });
        }
      }
    }
    setResults(res);
  };

  const clearFields = () => {
    setAa("");
    setBb("");
    setCc("");
    setDd("");
    setVv("");
    setXx("");
    setYy("");
    setZz("");
    setOo("");
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Dimension Calculator</h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block font-medium">aa:</label>
            <input
              type="number"
              value={aa}
              onChange={(e) => setAa(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label className="block font-medium">bb:</label>
            <input
              type="number"
              value={bb}
              onChange={(e) => setBb(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label className="block font-medium">cc:</label>
            <input
              type="number"
              value={cc}
              onChange={(e) => setCc(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label className="block font-medium">dd:</label>
            <input
              type="number"
              value={dd}
              onChange={(e) => setDd(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label className="block font-medium">vv:</label>
            <input
              type="number"
              value={vv}
              onChange={(e) => setVv(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label className="block font-medium">xx:</label>
            <input
              type="number"
              value={xx}
              onChange={(e) => setXx(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label className="block font-medium">yy:</label>
            <input
              type="number"
              value={yy}
              onChange={(e) => setYy(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label className="block font-medium">zz:</label>
            <input
              type="number"
              value={zz}
              onChange={(e) => setZz(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label className="block font-medium">oo:</label>
            <input
              type="number"
              value={oo}
              onChange={(e) => setOo(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded flex-1">
            Calculate
          </button>
          <button onClick={clearFields} className="bg-gray-500 text-white px-4 py-2 rounded flex-1">
            Clear
          </button>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Results:</h3>
          {results.length > 0 ? (
            <table className="min-w-full border-collapse border border-gray-400">
              <thead>
                <tr>
                  {[
                    "Count", "Area", "Dimensions", "nak", "aysh", "adym",
                    "karch", "aym", "vrm", "tidhi", "dikpth",
                    "amsa", "ygm", "karnm", "thvm", "kulm", "lagnam"
                  ].map((header, index) => (
                    <th
                      key={index}
                      className="py-2 px-3 border border-gray-400 bg-gray-200"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {results.map((row, index) => (
                  <tr key={index} className="text-center">
                    <td className="py-1 px-2 border border-gray-400">{row.count}</td>
                    <td className="py-1 px-2 border border-gray-400">{row.area}</td>
                    <td className="py-1 px-2 border border-gray-400">{row.dims}</td>
                    <td className="py-1 px-2 border border-gray-400">{row.nak}</td>
                    <td className="py-1 px-2 border border-gray-400">{row.aysh}</td>
                    <td className="py-1 px-2 border border-gray-400">{row.adym}</td>
                    <td className="py-1 px-2 border border-gray-400">{row.karch}</td>
                    <td className="py-1 px-2 border border-gray-400">{row.aym}</td>
                    <td className="py-1 px-2 border border-gray-400">{row.vrm}</td>
                    <td className="py-1 px-2 border border-gray-400">{row.tidhi}</td>
                    <td className="py-1 px-2 border border-gray-400">{row.dikpth}</td>
                    <td className="py-1 px-2 border border-gray-400">{row.amsa}</td>
                    <td className="py-1 px-2 border border-gray-400">{row.ygm}</td>
                    <td className="py-1 px-2 border border-gray-400">{row.karnm}</td>
                    <td className="py-1 px-2 border border-gray-400">{row.thvm}</td>
                    <td className="py-1 px-2 border border-gray-400">{row.kulm}</td>
                    <td className="py-1 px-2 border border-gray-400">{row.lagnam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
