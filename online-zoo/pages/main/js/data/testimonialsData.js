const itemsData = [
  {
    testimonials__personeName: 'Michael John',
    testimonials__personeImg: '../../assets/icons/main/testimonials/defaultUserIcon.svg',
    testimonials__location: 'Local Austria',
    testimonials__separator: '../../assets/icons/main/testimonials/separator.svg',
    testimonials__date: 'Today',
    testimonials__reviewText: 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
  },
  {
    testimonials__personeName: 'Alex Watcgovskiy',
    testimonials__personeImg: '../../assets/icons/main/testimonials/user1.png',
    testimonials__location: 'Belarus',
    testimonials__separator: '../../assets/icons/main/testimonials/separator.svg',
    testimonials__date: 'Today',
    testimonials__reviewText: 'My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
  },
  {
    testimonials__personeName: 'Helen Makey',
    testimonials__personeImg: '../../assets/icons/main/testimonials/user2.png',
    testimonials__location: 'Russia',
    testimonials__separator: '../../assets/icons/main/testimonials/separator.svg',
    testimonials__date: 'Yesterday',
    testimonials__reviewText: 'Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
  },
  {
    testimonials__personeName: 'Dmitriy Petrov',
    testimonials__personeImg: '../../assets/icons/main/testimonials/user3.png',
    testimonials__location: 'England',
    testimonials__separator: '../../assets/icons/main/testimonials/separator.svg',
    testimonials__date: 'Yesterday',
    testimonials__reviewText: 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
  },
  {
    testimonials__personeName: 'Michael Pilsner',
    testimonials__personeImg: '../../assets/icons/main/testimonials/defaultUserIcon.svg',
    testimonials__location: 'Britain',
    testimonials__separator: '../../assets/icons/main/testimonials/separator.svg',
    testimonials__date: 'Today',
    testimonials__reviewText: 'The best online zoo I’ve met. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
  },
  {
    testimonials__personeName: 'Valery Lendish',
    testimonials__personeImg: '../../assets/icons/main/testimonials/user3.png',
    testimonials__location: 'Kongo',
    testimonials__separator: '../../assets/icons/main/testimonials/separator.svg',
    testimonials__date: 'Yesterday',
    testimonials__reviewText: 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
  },
  {
    testimonials__personeName: 'Michael Anteros',
    testimonials__personeImg: '../../assets/icons/main/testimonials/defaultUserIcon.svg',
    testimonials__location: 'Japan',
    testimonials__separator: '../../assets/icons/main/testimonials/separator.svg',
    testimonials__date: 'Today',
    testimonials__reviewText: 'My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
  },
  {
    testimonials__personeName: 'Virgin Galacty',
    testimonials__personeImg: '../../assets/icons/main/testimonials/user1.png',
    testimonials__location: 'America',
    testimonials__separator: '../../assets/icons/main/testimonials/separator.svg',
    testimonials__date: 'Today',
    testimonials__reviewText: 'Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
  },
  {
    testimonials__personeName: 'Viander Forten',
    testimonials__personeImg: '../../assets/icons/main/testimonials/user3.png',
    testimonials__location: 'China',
    testimonials__separator: '../../assets/icons/main/testimonials/separator.svg',
    testimonials__date: 'Today',
    testimonials__reviewText: 'Love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
  },
  {
    testimonials__personeName: 'Carlos Manteky',
    testimonials__personeImg: '../../assets/icons/main/testimonials/defaultUserIcon.svg',
    testimonials__location: 'America',
    testimonials__separator: '../../assets/icons/main/testimonials/separator.svg',
    testimonials__date: 'Today',
    testimonials__reviewText: 'The ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
  },
  {
    testimonials__personeName: 'Veronika Lecho',
    testimonials__personeImg: '../../assets/icons/main/testimonials/user2.png',
    testimonials__location: 'Russia',
    testimonials__separator: '../../assets/icons/main/testimonials/separator.svg',
    testimonials__date: 'Today',
    testimonials__reviewText: 'Online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
  },
];

const item = [
  {
    tag: 'div',
    attributes: {
      class: 'testimonials__review',
    },
  },
  {
    tag: 'div',
    attributes: {
      class: 'testimonials__person',
    },
  },
  {
    tag: 'div',
    attributes: {
      class: 'testimonials__text',
    },
  },
  {
    tag: 'img',
    attributes: {
      class: 'testimonials__personeImg',
    },
    parent: 0,
  },
  {
    tag: 'div',
    attributes: {
      class: 'testimonials__personeInfo',
    },
    parent: 0,
  },
  {
    tag: 'p',
    attributes: {
      class: 'testimonials__personeName',
    },
    parent: 3,
  },
  {
    tag: 'div',
    attributes: {
      class: 'testimonials__personeLocation',
    },
    parent: 3,
  },
  {
    tag: 'p',
    attributes: {
      class: 'testimonials__location',
    },
    parent: 5,
  },
  {
    tag: 'img',
    attributes: {
      class: 'testimonials__separator',
    },
    parent: 5,
  },
  {
    tag: 'p',
    attributes: {
      class: 'testimonials__date',
    },
    parent: 5,
  },
  {
    tag: 'p',
    attributes: {
      class: 'testimonials__reviewText',
    },
    parent: 1,
  },
  {
    tag: 'p',
    attributes: {
      class: 'testimonials__reviewText',
    },
    parent: 1,
  },
  {
    tag: 'p',
    attributes: {
      class: 'testimonials__reviewText',
    },
    parent: 1,
  },
]

export {itemsData, item};
