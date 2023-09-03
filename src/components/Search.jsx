const Search = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 pb-8 md:grid-cols-2">
        <div className="card card-bordered w-full border-base-content bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Pilih Provinsi</h2>
            <div className="form-control">
              <select
                className="select select-bordered"
                placeholder="Pilih Provinsi ..."
              >
                <option>Provinsi</option>
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
                placeholder="Pilih Kabupaten/Kota ..."
              >
                <option>Kabupaten/Kota</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-outline w-full">Cari</button>
    </>
  );
};

export default Search;
