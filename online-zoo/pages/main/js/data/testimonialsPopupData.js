const itemsData = [
  {
    popup__close: '×',
  },
];

const item = [
  {
    tag: 'div',
    attributes: {
      class: 'popup',
    },
  },
  {
    tag: 'div',
    attributes: {
      class: 'popup__backDrop backDrop',
    },
  },
  {
    tag: 'div',
    attributes: {
      class: 'popup__container',
    },
  },
  {
    tag: 'p',
    attributes: {
      class: 'popup__close',
    },
    parent: 1,
  },
]

export {itemsData, item};
