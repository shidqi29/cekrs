import { MapPin } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";

import { BedDetailCard } from "@components/fragments";
import { Content } from "@components/layouts";
import { useFetchData } from "@hooks/useFetchData";

export const DetailHospital = () => {
  const { id } = useParams();

  const { data } = useFetchData(`/get-bed-detail?hospitalid=${id}&type=2`);

  return (
    <>
      <Content title="Detail Rumah Sakit">
        <div className="my-2 flex flex-col gap-y-1">
          <h3 className="text-2xl font-bold">{data?.data?.name}</h3>
          <div className="flex items-center gap-x-2">
            <div>
              <MapPin size={26} weight="fill" />
            </div>
            <span>{data?.data?.address}</span>
          </div>
          <div className="flex flex-col justify-center gap-y-8">
            {data?.data?.bedDetail?.map((item, idx) => (
              <BedDetailCard key={idx} data={item} />
            ))}
          </div>
        </div>
      </Content>
    </>
  );
};
