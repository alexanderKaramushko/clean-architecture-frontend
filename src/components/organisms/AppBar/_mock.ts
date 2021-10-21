import { LinkGroup } from 'domain/index';

export const LinkGroups: LinkGroup[] = [
  {
    links: [
      {
        attach: true,
        nested: [
          {
            attach: true,
            title: 'Подкатегория 1',
            url: '/main/1',
          },
        ],
        title: 'Категория 1',
        url: '/main',
      },
    ],
    title: 'Раздел 1',
  },
  {
    links: [
      {
        attach: true,
        title: 'Категория 1',
      },
    ],
    title: 'Раздел 2',
  },
];
