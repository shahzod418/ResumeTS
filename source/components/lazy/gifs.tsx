import React, {lazy, ReactElement} from "react";

const Resume = lazy(() => import('../gifs/Resume'));
const BrainGame = lazy(() => import('../gifs/BrainGame'));
const CognitiveDistortions = lazy(() => import('../gifs/CognitiveDistortions'));
const ContractBuilder = lazy(() => import('../gifs/ContractBuilder'));
const MultilingualClicker = lazy(() => import('../gifs/MultilingualClicker'));
const MusicBox = lazy(() => import('../gifs/MusicBox'));

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
