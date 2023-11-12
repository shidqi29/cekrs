import { Content } from "@components/layouts";
import { useFetchData } from "@hooks/useFetchData";
import { MapPin } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";

export const DetailHospital = () => {
  const { id } = useParams();

  const { data } = useFetchData(`/get-bed-detail?hospitalid=${id}&type=2`);

  return (
    <>
      <Content title="Detail Rumah Sakit">
        <div className="my-2 flex-col flex gap-y-1">
          <h3 className="text-2xl font-bold">{data?.data?.name}</h3>
          <span className="flex items-center gap-x-2">
            <MapPin size={26} weight="fill" /> {data?.data?.address}
          </span>
        </div>
      </Content>
    </>
  );
};
