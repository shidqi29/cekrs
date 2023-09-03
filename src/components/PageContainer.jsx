import PropTypes from "prop-types";
const PageContainer = ({ children, title }) => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content">
        <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-center">{title}</h1>
            <div className="divider"></div>
            {children}
        </div>
      </div>
    </div>
  );
};

PageContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default PageContainer;
