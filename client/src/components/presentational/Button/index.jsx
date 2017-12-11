import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = (props) => {
  const {
    buttonClass,
    onClick,
  } = props;

  return (
    <div
      aria-hidden
      onClick={onClick}
      className={classNames([buttonClass])}
    />
  );
};

Button.propTypes = {
  buttonClass: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.any,
  ]),
  onClick: PropTypes.func,
};

Button.defaultProps = Object.assign({}, Button.propTypes);

export default Button;
