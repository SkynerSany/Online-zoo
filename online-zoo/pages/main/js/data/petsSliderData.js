const itemsData = [
  {
    pets__itemName: 'Giant Pandas',
    pets__itemImg: '../../assets/images/main/pets/slider/pandas.png',
    pets__itemDescription: 'Native to Southwest China',
    pets__itemEat: '../../assets/icons/main/slider/banana.svg',
  },
  {
    pets__itemName: 'Gorillas',
    pets__itemImg: '../../assets/images/main/pets/slider/gorillas.png',
    pets__itemDescription: 'Native to Congo',
    pets__itemEat: '../../assets/icons/main/slider/banana.svg',
  },
  {
    pets__itemName: 'Cheetahs',
    pets__itemImg: '../../assets/images/main/pets/slider/cheetahs.png',
    pets__itemDescription: 'Native to Africa',
    pets__itemEat: '../../assets/icons/main/slider/meat.svg',
  },
  {
    pets__itemName: 'Eagles',
    pets__itemImg: '../../assets/images/main/pets/slider/eagles.png',
    pets__itemDescription: 'Native to South America',
    pets__itemEat: '../../assets/icons/main/slider/meat.svg',
  },
  {
    pets__itemName: 'Two-toed Sloth',
    pets__itemImg: '../../assets/images/main/pets/slider/sloth.png',
    pets__itemDescription: 'Mesoamerica, South America',
    pets__itemEat: '../../assets/icons/main/slider/banana.svg',
  },
  {
    pets__itemName: 'Penguins',
    pets__itemImg: '../../assets/images/main/pets/slider/penguins.png',
    pets__itemDescription: 'Native to Antarctica',
    pets__itemEat: '../../assets/icons/main/slider/meat.svg',
  },
  {
    pets__itemName: 'Alligators',
    pets__itemImg: '../../assets/images/main/pets/slider/alligators.png',
    pets__itemDescription: 'Native to Southeastern U. S.',
    pets__itemEat: '../../assets/icons/main/slider/meat.svg',
  },
];

const item = [
  {
    tag: 'div',
    attributes: {
      class: 'pets__sliderItem',
    },
  },
  {
    tag: 'div',
    attributes: {
      class: 'pets__itemContainer',
    },
  },
  {
    tag: 'div',
    attributes: {
      class: 'pets__itemBorder',
    },
    parent: 0,
  },
  {
    tag: 'img',
    attributes: {
      class: 'pets__itemImg',
      src: '',
      alt: '',
    },
    parent: 1,
  },
  {
    tag: 'div',
    attributes: {
      class: 'pets__itemInfo',
    },
    parent: 1,
  },
  {
    tag: 'div',
    attributes: {
      class: 'pets__itemText',
    },
    parent: 3,
  },
  {
    tag: 'p',
    attributes: {
      class: 'pets__itemName',
    },
    parent: 4,
  },
  {
    tag: 'p',
    attributes: {
      class: 'pets__itemDescription',
    },
    parent: 4,
  },
  {
    tag: 'img',
    attributes: {
      class: 'pets__itemEat',
      src: '',
      alt: '',
    },
    parent: 3,
  },
]

export {itemsData, item};
