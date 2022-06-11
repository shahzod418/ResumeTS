import React, { lazy } from 'react';

const LazyTelegramIcon = lazy(() => import('./icons/Telegram'));
const LazyGithubIcon = lazy(() => import('./icons/Github'));
const LazyEnvelopeIcon = lazy(() => import('./icons/Envelope'));
const LazyPhoneIcon = lazy(() => import('./icons/Phone'));

export default [
  {
    type: 'telegram',
    link: 'https://t.me/shahzod418',
    popup: '@shahzod418',
    lazy: <LazyTelegramIcon />,
  },
  {
    type: 'envelope',
    link: 'mailto:shahzod@davlatov.space',
    popup: 'shahzod@davlatov.space',
    lazy: <LazyEnvelopeIcon />,
  },
  {
    type: 'phone',
    link: 'tel:+ 79998239334',
    popup: '+ 7 (999) 823-93-34',
    lazy: <LazyPhoneIcon />,
  },
  {
    type: 'github',
    link: 'https://github.com/shahzod418',
    popup: 'shahzod418',
    lazy: <LazyGithubIcon />,
  },
];
