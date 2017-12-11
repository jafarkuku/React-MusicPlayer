import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

const Icon = (props) => {
  const {
    children,
    iconClass,
  } = props;

  Icon.propTypes = {
    children: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired,
  };

  Icon.defaultProps = Object.assign({}, Icon.propTypes);

  return (
    <div className={iconClass}>
      {children}
    </div>
  );
};

export default Icon;
