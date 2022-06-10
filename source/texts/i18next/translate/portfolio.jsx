import React, { lazy } from 'react';
import ruMultilingualClicker from './markdown/ruMultilingualClicker.md';
import enMultilingualClicker from './markdown/enMultilingualClicker.md';
import ruContractBuilder from './markdown/ruContractBuilder.md';
import enContractBuilder from './markdown/enContractBuilder.md';
import ruBrainGame from './markdown/ruBrainGame.md';
import enBrainGame from './markdown/enBrainGame.md';
import ruMusicBox from './markdown/ruMusicBox.md';
import enMusicBox from './markdown/enMusicBox.md';
import ruCognitiveDistortions from './markdown/ruCognitiveDistortions.md';
import enCognitiveDistortions from './markdown/enCognitiveDistortions.md';
import ruResume from './markdown/ruResume.md';
import enResume from './markdown/enResume.md';

const LazyMultilingualClickerGif = lazy(() => import('./gifs/MultilingualClickerGif'));
const LazyBrainGameGif = lazy(() => import('./gifs/BrainGameGif'));
const LazyCognitiveDistortionsGif = lazy(() => import('./gifs/CognitiveDistortionsGif'));
const LazyContractBuilderGif = lazy(() => import('./gifs/ContractBuilderGif'));
const LazyMusicBoxGif = lazy(() => import('./gifs/MusicBoxGif'));
const LazyResumeGif = lazy(() => import('./gifs/ResumeGif'));

export default {
  frontend: {
    tab: 'Frontend',
    projects: [
      {
        id: 'resume',
        title: 'portfolio.description.frontend.resume.title',
        links: [
          {
            id: 'github',
            name: 'Github',
            link: 'https://github.com/shahzod418/Resume',
          },
          { id: 'website', name: 'Website', link: 'https://www.davlatov.space/' },
        ],
        gif: <LazyResumeGif />,
        shortDescription: 'portfolio.description.frontend.resume.shortDescription',
        stack: 'portfolio.description.frontend.resume.stack',
        description: {
          ru: (
            <div className="col-auto text-white" dangerouslySetInnerHTML={{ __html: ruResume }} />
          ),
          en: (
            <div className="col-auto text-white" dangerouslySetInnerHTML={{ __html: enResume }} />
          ),
        },
      },
      {
        id: 'multilingualClicker',
        title: 'portfolio.description.frontend.multilingualClicker.title',
        links: [
          {
            id: 'github',
            name: 'Github',
            link: 'https://github.com/shahzod418/Multilingual-clicker',
          },
          { id: 'website', name: 'Website', link: 'https://multilingual-clicker.vercel.app' },
        ],
        gif: <LazyMultilingualClickerGif />,
        shortDescription: 'portfolio.description.frontend.multilingualClicker.shortDescription',
        stack: 'portfolio.description.frontend.multilingualClicker.stack',
        description: {
          ru: (
            <div
              className="col-auto text-white"
              dangerouslySetInnerHTML={{ __html: ruMultilingualClicker }}
            />
          ),
          en: (
            <div
              className="col-auto text-white"
              dangerouslySetInnerHTML={{ __html: enMultilingualClicker }}
            />
          ),
        },
      },
      {
        id: 'contractBuilder',
        title: 'portfolio.description.frontend.contractBuilder.title',
        links: [
          { id: 'github', name: 'Github', link: 'https://github.com/shahzod418/Contract-builder' },
          { id: 'website', name: 'Website', link: 'https://contract-builder.vercel.app' },
        ],
        gif: <LazyContractBuilderGif />,
        shortDescription: 'portfolio.description.frontend.contractBuilder.shortDescription',
        stack: 'portfolio.description.frontend.contractBuilder.stack',
        description: {
          ru: (
            <div
              className="col-auto text-white"
              dangerouslySetInnerHTML={{ __html: ruContractBuilder }}
            />
          ),
          en: (
            <div
              className="col-auto text-white"
              dangerouslySetInnerHTML={{ __html: enContractBuilder }}
            />
          ),
        },
      },
    ],
  },
  backend: {
    tab: 'Backend',
    projects: [
      {
        id: 'brainGame',
        title: 'portfolio.description.backend.brainGame.title',
        links: [{ id: 'github', name: 'Github', link: 'https://github.com/shahzod418/Brain-game' }],
        gif: <LazyBrainGameGif />,
        shortDescription: 'portfolio.description.backend.brainGame.shortDescription',
        stack: 'portfolio.description.backend.brainGame.stack',
        description: {
          ru: (
            <div
              className="col-auto text-white"
              dangerouslySetInnerHTML={{ __html: ruBrainGame }}
            />
          ),
          en: (
            <div
              className="col-auto text-white"
              dangerouslySetInnerHTML={{ __html: enBrainGame }}
            />
          ),
        },
      },
    ],
  },
  layout: {
    tab: 'Layout',
    projects: [
      {
        id: 'cognitiveDistortions',
        title: 'portfolio.description.layout.cognitiveDistortions.title',
        links: [
          {
            id: 'github',
            name: 'Github',
            link: 'https://github.com/shahzod418/Cognitive-distortions',
          },
          {
            id: 'website',
            name: 'Website',
            link: 'https://shahzod418.github.io/Cognitive-distortions/',
          },
        ],
        gif: <LazyCognitiveDistortionsGif />,
        shortDescription: 'portfolio.description.layout.cognitiveDistortions.shortDescription',
        stack: 'portfolio.description.layout.cognitiveDistortions.stack',
        description: {
          ru: (
            <div
              className="col-auto text-white"
              dangerouslySetInnerHTML={{ __html: ruCognitiveDistortions }}
            />
          ),
          en: (
            <div
              className="col-auto text-white"
              dangerouslySetInnerHTML={{ __html: enCognitiveDistortions }}
            />
          ),
        },
      },
      {
        id: 'musicBox',
        title: 'portfolio.description.layout.musicBox.title',
        links: [
          { id: 'github', name: 'Github', link: 'https://github.com/shahzod418/Music-box' },
          { id: 'main', name: 'Main', link: 'https://shahzod418.github.io/Music-box/index.html' },
          {
            id: 'artist',
            name: 'Artist',
            link: 'https://shahzod418.github.io/Music-box/artist.html',
          },
        ],
        gif: <LazyMusicBoxGif />,
        shortDescription: 'portfolio.description.layout.musicBox.shortDescription',
        stack: 'portfolio.description.layout.musicBox.stack',
        description: {
          ru: (
            <div className="col-auto text-white" dangerouslySetInnerHTML={{ __html: ruMusicBox }} />
          ),
          en: (
            <div className="col-auto text-white" dangerouslySetInnerHTML={{ __html: enMusicBox }} />
          ),
        },
      },
    ],
  },
};
