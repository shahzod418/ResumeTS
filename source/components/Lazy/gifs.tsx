import React, { lazy, ReactElement } from 'react';

const Resume = lazy(() => import('../Gifs/Resume'));
const BrainGame = lazy(() => import('../Gifs/BrainGame'));
const CognitiveDistortions = lazy(() => import('../Gifs/CognitiveDistortions'));
const ContractBuilder = lazy(() => import('../Gifs/ContractBuilder'));
const MultilingualClicker = lazy(() => import('../Gifs/MultilingualClicker'));
const MusicBox = lazy(() => import('../Gifs/MusicBox'));

export interface Gif {
  id: string;
  gif: ReactElement;
}

const gifs: Gif[] = [
  {
    id: 'resume',
    gif: <Resume />,
  },
  {
    id: 'multilingualClicker',
    gif: <MultilingualClicker />,
  },
  {
    id: 'contractBuilder',
    gif: <ContractBuilder />,
  },
  {
    id: 'brainGame',
    gif: <BrainGame />,
  },
  {
    id: 'cognitiveDistortions',
    gif: <CognitiveDistortions />,
  },
  {
    id: 'musicBox',
    gif: <MusicBox />,
  },
];

export default gifs;
