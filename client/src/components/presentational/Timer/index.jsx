import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Timer = (prop) => {
  Timer.propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]).isRequired,

    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ]).isRequired,
  };

  if (!prop.children) {
    return null;
  }

  const props = Object.assign({}, prop);
  props.className = classNames([prop.className]);

  return (
    <div>
      { props.children }
    </div>
  );
};

export default Timer;
