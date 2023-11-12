import PropTypes from "prop-types";
import { Bed, CheckCircle, HourglassMedium } from "@phosphor-icons/react";
import { formattedDate } from "@utils";

export const BedDetailCard = ({ data }) => {
  const { stats, time } = data;

  return (
    <>
      <div className="card h-full w-full shadow-md shadow-black">
        <div className="card-body">
          <h2 className="card-title">{stats.title}</h2>
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="flex items-center gap-x-2">
              <div>
                <Bed size={24} weight="fill" />
              </div>
              <p>
                <span>{stats.bed_available}</span> Tempat Tidur
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <div>
                <CheckCircle size={24} weight="fill" />
              </div>
              <p>
                <span>{stats.bed_empty}</span> Kosong
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <div>
                <HourglassMedium size={24} weight="fill" />
              </div>
              <p>
                <span>{stats.queue}</span> Antre
              </p>
            </div>
          </div>
          <p className="capitalize text-xs">
            Terakhir Diperbarui: {formattedDate(time)} WIB
          </p>
        </div>
      </div>
    </>
  );
};

BedDetailCard.propTypes = {
  data: PropTypes.object,
};
