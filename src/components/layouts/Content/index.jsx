import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

export const Content = ({ title, children }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="my-10 w-full max-w-3xl">
      <section>
        <div className="flex items-center justify-start md:gap-2">
          <button onClick={handleBack} className="btn btn-circle btn-ghost">
            <ArrowLeft size={28} />
          </button>
          <h1 className="text-3xl font-black md:text-5xl">{title}</h1>
        </div>
        <div className="divider -mb-2 mt-0"></div>
      </section>
      <section>{children}</section>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
