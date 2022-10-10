export default class CreateDomElement {
  constructor(data, parent) {
    this.item = data.item;
    this.itemsData = data.itemsData;
    this.parent = parent;
  }

  typeCount = {
    count: 0,

    popup() {
      return this.count
    },

    testimonials() {
      return this.count++
    },

    slider: (i) => i,
  }

  createItem(item) {
    const tag = document.createElement(item.tag);
    
    for (let key in item.attributes) {
      tag.setAttribute(key, item.attributes[key]);
    }
    
    return tag;
  }

  createElement(data) {
    const newElement = [];

    this.item.forEach((item, i) => {
      if (i === 0) return;

      const currentElement = this.createItem(item);
      
      if (item.tag === 'img') {
        currentElement.src = data[currentElement.className];
      } else if (item.tag === 'p') {
        currentElement.textContent = data[currentElement.className];
      }

      newElement.push(currentElement);

      if (Object.keys(item).includes('parent')) {
        newElement[item.parent].append(currentElement)
      }
    });

    return newElement.filter((item) => !item.parentNode);
  }

  addNewElement(count, to, isRandom, type) {
    const result = this.createItem(this.item[0]);

    if (isRandom) this.itemsData.sort(() => Math.random() - 0.5);

    for (let i = 1; i < count + 1; i++) {
      const childrens = this.createElement(this.itemsData[this.typeCount[type](i)]);

      if (childrens.length > 1) {
        for (let i = 0; i < childrens.length; i++) {
          result.append(childrens[i]);
        }
      } else {
        result.append(childrens[0]);
      }
      
    }

    if (to === 'start') {
      this.parent.prepend(result);
    } else if (to === "end") {
      this.parent.append(result);
    }

    return result;
  }

  removeDomElements(count, from) {
    for (let i = 0; i < count; i++) {
      if (from === 'start') {
        this.parent.firstChild.remove();
      } else {
        this.parent.lastChild.remove();
      }
    }
  }
};
