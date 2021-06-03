const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// console.log(images);

const makeGalleryMarkup = image => {
  const { url, alt } = image;
  console.log(image);

  return `<li><img src=${url} alt=${alt}></li>`;
};

// console.log(makeGalleryMarkup(images[0]));

const listEl = document.querySelector('ul');
listEl.style.display = 'flex';
listEl.style.justifyContent = 'center';
listEl.style.listStyle = 'none';
listEl.style.backgroundColor = 'lightgray';

// console.log(listEl);
const addGalleryMarkup = images.map(makeGalleryMarkup).join('');

listEl.insertAdjacentHTML('afterbegin', addGalleryMarkup);

const listItem = document.querySelectorAll('li');
console.log(listItem);
listItem.forEach(item => {
  item.style.display = 'block';
  item.style.margin = '10px';
});

const imgEl = document.querySelectorAll('img');
console.log(imgEl);
imgEl.forEach(img => {
  img.width = '320';
  img.height = '200';
});

// ------------------------------------------------------метод 2
// const listEl = document.querySelector('ul');
// // console.log(listEl);
// listEl.style.display = 'flex';
// listEl.style.flexWrap = 'wrap';
// listEl.style.listStyle = 'none';
// listEl.style.backgroundColor = 'lightgray';

// const addImgList = images => {
//   return images.map(image => {
//     const listItem = document.createElement('li');
//     const imgEl = document.createElement('img');
//     imgEl.src = image.url;
//     imgEl.alt = image.alt;
//     imgEl.width = 320;
//     imgEl.style.height = '200px';
//     imgEl.style.padding = '5px';

//     listItem.appendChild(imgEl);

//     return listItem;
//   });
// };

// console.log(addImgList(images));
// const imgList = addImgList(images);
// listEl.append(...imgList);
// console.log(listEl);
