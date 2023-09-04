import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../services/fetcher";

const Search = () => {
  const { data } = useSWR(`get-provinces`, fetcher);
  const [prov, setProv] = useState("");
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [load, setLoad] = useState(false);
  const searchCitiesByProvince = async (provinceId) => {
    setLoad(true);
    const res = await fetcher(`get-cities?provinceid=${provinceId}`);
    setLoad(false);
    setCities(res.cities);
  };

  useEffect(() => {
    searchCitiesByProvince(prov);
  }, [prov]);
  return (
    <>
      <div className="grid grid-cols-1 gap-4 pb-8 md:grid-cols-2">
        <div className="card card-bordered w-full border-base-content bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Pilih Provinsi</h2>
            <div className="form-control">
              <select
                className="select select-bordered"
                value={prov}
                onChange={(e) => setProv(e.target.value)}
                disabled={!data}
              >
                <option value="" defaultValue={""} disabled hidden>
                  Pilih Provinsi ...
                </option>
                {data?.provinces.map((province) => (
                  <option key={province.id} value={province.id}>
                    {province.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="card card-bordered w-full border-base-content bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Pilih Kabupaten/Kota</h2>
            <div className="form-control">
              <select
                className="select select-bordered"
                value={city}
                disabled={!prov.length || load}
                onChange={(e) => setCity(e.target.value)}
              >
                {!prov.length ? (
                  <option value="" defaultValue={""} disabled hidden>
                    Pilih Kabupaten/Kota ...
                  </option>
                ) : (
                  <option value="" defaultValue={""} disabled hidden>
                    Pilih Kabupaten/Kota ...
                  </option>
                )}
                {cities.map((cit) => (
                  <option key={cit.id} value={cit.id}>
                    {cit.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-outline w-full"
        disabled={!prov.length || load}
      >
        Cari
      </button>
    </>
  );
};

export default Search;
