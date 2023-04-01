import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import cancion2 from '../audios/y2mate.com - Maycol Riddim Ft Ryan Castro  Nunca Imagine Prod Palma Productions_320kbps.mp3';

export const Audio = () => {
  return <ReactAudioPlayer src={cancion2} autoPlay={true} controls={true} />;
};
