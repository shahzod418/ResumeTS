import React, { lazy } from 'react';
import IContact from '../source/interfaces/IContact';

const TelegramIcon = lazy(() => import('react-bootstrap-icons/dist/icons/telegram'));
const EnvelopeIcon = lazy(() => import('react-bootstrap-icons/dist/icons/envelope'));
const PhoneIcon = lazy(() => import('react-bootstrap-icons/dist/icons/phone'));
const GithubIcon = lazy(() => import('react-bootstrap-icons/dist/icons/github'));

const contacts: IContact[] = [
  {
    type: 'telegram',
    link: 'https://t.me/shahzod418',
    popup: '@shahzod418',
    lazy: <TelegramIcon />,
  },
  {
    type: 'envelope',
    link: 'mailto:shahzod@davlatov.space',
    popup: 'shahzod@davlatov.space',
    lazy: <EnvelopeIcon />,
  },
  {
    type: 'phone',
    link: 'tel:+ 79998239334',
    popup: '+ 7 (999) 823-93-34',
    lazy: <PhoneIcon />,
  },
  {
    type: 'github',
    link: 'https://github.com/shahzod418',
    popup: 'shahzod418',
    lazy: <GithubIcon />,
  },
];

export default contacts;
