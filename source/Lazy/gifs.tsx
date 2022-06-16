import React, { lazy, ReactElement } from 'react';

const Resume = lazy(() => import('../components/Gifs/Resume'));
const BrainGame = lazy(() => import('../components/Gifs/BrainGame'));
const CognitiveDistortions = lazy(() => import('../components/Gifs/CognitiveDistortions'));
const ContractBuilder = lazy(() => import('../components/Gifs/ContractBuilder'));
const MultilingualClicker = lazy(() => import('../components/Gifs/MultilingualClicker'));
const MusicBox = lazy(() => import('../components/Gifs/MusicBox'));

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
