import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Label = (prop) => {
  Label.propTypes = {
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
    <div {...props}>
      { props.children }
    </div>
  );
};

export default Label;
