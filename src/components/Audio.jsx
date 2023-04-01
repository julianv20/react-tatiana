import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import cancion2 from '../audios/cancion.mp3';

export const Audio = () => {
  return <ReactAudioPlayer src={cancion2} autoPlay={true} controls={true} />;
};
