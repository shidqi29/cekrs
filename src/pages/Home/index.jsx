import { InputForm } from "@components/fragments";

export const Home = () => {
  return (
    <>
      <div className="my-10 w-full max-w-3xl">
        <section>
          <h1 className="text-center text-3xl font-black md:text-5xl">
            Cek Ketersediaan Tempat Tidur Rumah Sakit Indonesia
          </h1>
          <div className="divider -mb-2 mt-0"></div>
        </section>
        <section>
          <InputForm />
        </section>
      </div>
    </>
  );
};
