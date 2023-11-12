import { MapPin, MapTrifold, Phone } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";

import { BedDetailCard } from "@components/fragments";
import { Content } from "@components/layouts";
import { useFetchData } from "@hooks";
import { Loading } from "@components/elements";

export const DetailHospital = () => {
  const { id } = useParams();

  const { data: detailHospital, isLoading: isDetailHospitalLoading } =
    useFetchData(`/get-bed-detail?hospitalid=${id}&type=2`);

  const { data: hospitalMap, isLoading: isHospitalMapLoading } = useFetchData(
    `/get-hospital-map?hospitalid=${id}`,
  );

  if (isDetailHospitalLoading || isHospitalMapLoading) return <Loading />;

  return (
    <>
      <Content title="Detail Rumah Sakit">
        <div className="my-2 flex flex-col gap-y-1">
          <h3 className="text-2xl font-bold">{detailHospital?.data?.name}</h3>
          <div className="flex items-center gap-x-2">
            <div>
              <MapPin size={26} weight="fill" />
            </div>
            <span>{detailHospital?.data?.address}</span>
          </div>
          <div className="my-2 flex flex-col gap-2 md:flex-row">
            <a
              className="btn flex items-center gap-x-2 capitalize"
              href={`tel:${detailHospital?.data?.phone}`}
            >
              <Phone size={26} weight="fill" />
              <span className="">{detailHospital?.data?.phone}</span>
            </a>
            <a
              className="btn flex items-center gap-x-2 capitalize"
              href={hospitalMap?.data?.gmaps}
              rel="noreferrer"
              target="_blank"
            >
              <MapTrifold size={26} weight="fill" />
              <span className="">Google Maps</span>
            </a>
          </div>
          <div className="flex flex-col justify-center gap-y-8">
            {detailHospital?.data?.bedDetail?.map((item, idx) => (
              <BedDetailCard key={idx} data={item} />
            ))}
          </div>
        </div>
      </Content>
    </>
  );
};
