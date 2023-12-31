import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const HospitalCard = ({ data }) => {
  const { id, name, address, available_beds } = data;

  return (
    <>
      <div className="card h-full w-full shadow-md shadow-black">
        <Link className="card-body" to={`detail/${id}`}>
          <h2 className="card-title text-2xl font-black">{name}</h2>
          <p className="text-base">{address}</p>
          {available_beds.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              {item.available > 0 ? (
                <div className="w-fit rounded-lg bg-green-700 px-2 py-1 text-white">
                  Tersedia {item.available} Kamar
                </div>
              ) : (
                <div className="w-fit rounded-lg bg-red-700 px-2 py-1 text-white">
                  Penuh
                </div>
              )}
              <p className="text-xs">{item.info}</p>
            </div>
          ))}
        </Link>
      </div>
    </>
  );
};

HospitalCard.propTypes = {
  data: PropTypes.object.isRequired,
};
