import React from 'react';
import PropTypes from 'prop-types';
//  import classNames from 'classnames';

const Button = (props) => {
  const {
    buttonClassName,
    onClick,
    children,
  } = props;

  return (
    <div
      aria-hidden
      onClick={onClick}
      className={buttonClassName.activeClass}
    >
      {children}
    </div>
  );
};

Button.propTypes = {
  buttonClassName: PropTypes.shape({
    activeClass: PropTypes.string,
    hasChildrenClass: PropTypes.string,
  }),
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

Button.defaultProps = Object.assign({}, Button.propTypes);

export default Button;
