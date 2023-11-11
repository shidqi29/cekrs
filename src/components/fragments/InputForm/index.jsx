import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useFetchData } from "@hooks/useFetchData";
import { axiosInstance } from "@lib/axios";

export const InputForm = () => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [cities, setCities] = useState(null);
  const [isCitiesLoading, setIsCitiesLoading] = useState(false);
  const navigate = useNavigate();

  const { data: provinces, isLoading: isProvinceLoading } =
    useFetchData("/get-provinces");

  useEffect(() => {
    if (province) {
      const fetchCities = async () => {
        setIsCitiesLoading(true);
        const { data } = await axiosInstance.get(
          `/get-cities?provinceid=${province}`,
        );
        setCities(data);
        setIsCitiesLoading(false);
      };
      fetchCities();
    }
  }, [province]);

  const handleSubmit = () => {
    if (province && city) {
      navigate(`/rumah-sakit`, {
        state: {
          province,
          city,
        },
      });
    }
  };

  return (
    <>
      <div className="flex w-full flex-col gap-y-10">
        <div className="flex w-full flex-col justify-around md:flex-row">
          <div className="form-control w-full md:max-w-xs">
            <label className="label">
              <span className="label-text text-xl font-semibold">Provinsi</span>
            </label>
            <select
              className="select select-bordered"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              disabled={!provinces}
            >
              <option value="" defaultValue={""} disabled hidden>
                {isProvinceLoading ? "Loading..." : "Pilih Provinsi"}
              </option>
              {provinces?.provinces?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control w-full md:max-w-xs">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Kabupaten/Kota
              </span>
            </label>
            <select
              className="select select-bordered"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              disabled={!cities || isCitiesLoading}
            >
              <option value="" defaultValue={""} disabled hidden>
                {isCitiesLoading ? "Loading..." : "Pilih Kabupaten/Kota"}
              </option>
              {cities?.cities?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="btn btn-outline w-full"
          disabled={!province || !city}
        >
          Cari
        </button>
      </div>
    </>
  );
};
