import data from '../data.js';

const createButton = () => {
  const icon = data.icon;
  const buttonEl = document.createElement('button');

  buttonEl.id = icon.id;

  buttonIcon.forEach((icon) => {
    const keysIcon = Object.keys(buttonIcon);
    console.dir('keysIcon : ' + keysIcon);
    console.log(`icon : ${icon}`);

    for (let i = 0; i < keysIcon.length; i++) {
      buttonEl.innerHTML = icon.iconHTML;
      buttonEl.id = icon.textId;
      console.dir('icon : ' + icon);
      console.dir(buttonEl);
    }
  }); // need add second button
};
