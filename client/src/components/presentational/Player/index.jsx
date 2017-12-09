import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Audio from '../Audio';
import Label from '../../presentational/Label';

const Player = (props) => {
  const {
    buttonClassName,
    onPlay,
    onPrevious,
    onNext,
    audioFile,
    audio,
    autoPlay,
    duration,
    onTimeUpdate,
  } = props;

  Player.propTypes = {
    buttonClassName: PropTypes.shape({
      activeClass: PropTypes.string,
      hasChildrenClass: PropTypes.string,
    }),
    onPlay: PropTypes.func,
    onPrevious: PropTypes.func,
    onNext: PropTypes.func,
    audioFile: PropTypes.string,
    audio: PropTypes.func,
    autoPlay: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
    onTimeUpdate: PropTypes.func,
    duration: PropTypes.string,
  };

  Player.defaultProps = Object.assign({}, Player.propTypes);

  return (
    <div>
      Hello i am the button
      <Button
        onClick={onPlay}
        buttonClassName={buttonClassName}
      >
        <p>I am Play</p>
      </Button>
      <Button
        onClick={onPrevious}
        buttonClassName={buttonClassName}
      >
        <p>I am Previous</p>
      </Button>
      <Button
        onClick={onNext}
        buttonClassName={buttonClassName}
      >
        <p>I am Next</p>
      </Button>
      <Audio
        audiofile={audioFile}
        autoPlay={autoPlay}
        audio={audio}
        onTimeUpdate={onTimeUpdate}
      />
      <Label><h3>{duration}</h3></Label>
    </div>
  );
};

export default Player;
