export default class CreateDomElement {
  constructor(data, parent) {
    this.item = data.item;
    this.itemsData = data.itemsData;
    this.parent = parent;
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
      
      if (data) {
        if (item.tag === 'img') {
          currentElement.src = data[currentElement.className];
        } else if (item.tag === 'p') {
          currentElement.textContent = data[currentElement.className];
        }
      }

      newElement.push(currentElement);

      if (Object.keys(item).includes('parent')) {
        newElement[item.parent].append(currentElement)
      }
    });

    return newElement.filter((item) => !item.parentNode);
  }

  addNewElement(count, to) {
    const result = this.createItem(this.item[0]);
    this.itemsData.sort(() => Math.random() - 0.5);

    for (let i = 1; i < count + 1; i++) {
      const childrens = this.createElement(this.itemsData[i]);

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
    } else {
      this.parent.append(result);
    }
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
