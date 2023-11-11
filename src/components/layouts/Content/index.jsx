import PropTypes from "prop-types";

export const Content = ({ title, children }) => {
  return (
    <div className="max-w-3xl">
      <section>
        <h1 className="text-center text-3xl md:text-5xl font-black">{title}</h1>
        <div className="divider"></div>
      </section>
      <section>{children}</section>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
