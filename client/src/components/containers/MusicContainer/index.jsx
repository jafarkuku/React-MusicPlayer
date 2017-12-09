import React, { Component } from 'react';
import axios from 'axios';

import TrackList from '../../presentational/TrackList';
import TrackInformation from '../../presentational/TrackInformation';
import Player from '../../presentational/Player';

class MusicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {
        tracks: [],
        selectedTrack: {},
        state: 'playing',
        autoPlay: true,
        duration: '0',
      },
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3200/musicplayer/api/tracks')
      .then((res) => {
        const newData = Object.assign({}, this.state.player, {
          tracks: res.data,
          selectedTrack: res.data[this.getRandomNumber(1, this.state.player.tracks.length)],
        });
        this.setState({
          player: newData,
        });
      });
  }

  getRandomNumber = (min, max) =>
    Math.floor(Math.random() * ((max - min) + 1)) + min;

  stopPropagation = (e) => {
    e.stopPropagation();
  }

  handleOnSelect = (e) => {
    const selectedTrack = this.state.player.tracks.filter(track =>
      track.track_id === e.currentTarget.dataset.id);
    const newSelectedTrack = Object.assign({}, this.state.player, {
      selectedTrack: selectedTrack[0],
    });
    this.setState({ player: newSelectedTrack });
  }

  handleTimeUpdate = () => {
    function timeFormat(time) {
      const hrs = Math.floor(time / 3600);
      const mins = Math.floor((time % 3600) / 60);
      const secs = Math.round(time % 60);

      let ret = '';

      if (hrs > 0) {
        ret += ` ${hrs}:${(mins < 10 ? 0 : '')}`;
      }
      ret += `${mins}:${(secs < 10 ? '0' : '')}`;
      ret += `${secs}`;
      return ret;
    }
    const duration = Object.assign({}, this.state.player, {
      duration: timeFormat(this.audio.currentTime),
    });
    this.setState({ player: duration });
  }

  handleOnPlay = () => {
    console.log(this.audio.timeupdate);
    const player = Object.assign({}, this.state.player);
    player.duration = Math.floor(this.audio.currentTime);
    if (player.state === 'playing') {
      player.state = 'paused';
      this.audio.pause();
      this.setState({ player });
    } else if (player.state === 'paused') {
      player.state = 'playing';
      this.audio.play();
      this.setState({ player });
    }

    console.log(this.state.player.state);
  }

  handleOnNext = () => {
    console.log('You clicked Next!');
  }

  handleOnPrevious = () => {
    console.log('You clicked Previous!');
  }

  render() {
    if (this.state.player.tracks.length === 0) {
      return (
        <div><h1>Loading Player...</h1></div>
      );
    }
    return (
      <div>
        <Player
          onPlay={this.handleOnPlay}
          onNext={this.handleOnNext}
          onPrevious={this.handleOnPrevious}
          audioFile={this.state.player.selectedTrack.track_file}
          autoPlay={this.state.player.autoPlay}
          audio={(audio) => { this.audio = audio; }}
          duration={this.state.player.duration}
          onTimeUpdate={this.handleTimeUpdate}
        />
        <TrackInformation track={this.state.player.selectedTrack} />
        <TrackList
          tracks={this.state.player.tracks}
          onTrackSelect={this.handleOnSelect}
        />
      </div>
    );
  }
}

export default MusicContainer;
