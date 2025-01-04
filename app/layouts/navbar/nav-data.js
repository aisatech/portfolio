import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projetos',
    pathname: '/#project-1',
  },
  {
    label: 'Sobre Mim',
    pathname: '/#details',
  },
  {
    label: 'Textos',
    pathname: '/articles',
  },
  {
    label: 'Contato',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Bluesky',
    url: `https://bsky.app/profile/${config.bluesky}`,
    icon: 'bluesky',
  },
  {
    label: 'Figma',
    url: `https://www.figma.com/${config.figma}`,
    icon: 'figma',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
