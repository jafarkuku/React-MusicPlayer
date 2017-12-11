import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

import progressbar from '../../../themes/sass/components/progressbar.scss';

const ProgressBar = (props) => {
  const {
    progress,
    value,
    onClick,
  } = props;


  ProgressBar.propTypes = {
    progress: PropTypes.func,
    onClick: PropTypes.func,
    value: PropTypes.string,
  };

  ProgressBar.defaultProps = Object.assign({}, ProgressBar.propTypes);

  return (
    <span className={progressbar.progressbar}>
      <progress
        aria-hidden
        ref={progress}
        value={value}
        max="1"
        onClick={onClick}
      />
    </span>
  );
};

export default ProgressBar;
