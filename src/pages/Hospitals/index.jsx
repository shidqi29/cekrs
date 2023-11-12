import { useLocation } from "react-router-dom";
import { MapPin } from "@phosphor-icons/react";

import { HospitalCard } from "@components/fragments";
import { Content } from "@components/layouts";
import { useFetchData } from "@hooks/useFetchData";

export const Hospitals = () => {
  const location = useLocation();
  const { province, city, provinceName, cityName } = location.state;

  const { data } = useFetchData(
    `/get-hospitals?provinceid=${province}&cityid=${city}&type=2`,
  );

  return (
    <>
      <Content title="Daftar Rumah Sakit">
        <div className="my-4">
          <div className="flex items-center gap-x-2 font-semibold">
            <span>
              <MapPin size={26} weight="fill" />
            </span>
            <span>
              {cityName}, {provinceName}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-y-8">
          {data?.hospitals?.map((item) => (
            <HospitalCard key={item.id} data={item} />
          ))}
        </div>
      </Content>
    </>
  );
};
