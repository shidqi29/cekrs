export const InputForm = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-y-10">
        <div className="flex w-full flex-col justify-evenly md:flex-row">
          <div className="form-control w-full md:max-w-xs">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Pilih Provinsi
              </span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Pilih Provinsi
              </option>
            </select>
          </div>
          <div className="form-control w-full md:max-w-xs">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Pilih Kabupaten/Kota
              </span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Pilih Kabupaten/Kota
              </option>
            </select>
          </div>
        </div>
        <button className="btn btn-outline w-full" disabled>
          Cari
        </button>
      </div>
    </>
  );
};
