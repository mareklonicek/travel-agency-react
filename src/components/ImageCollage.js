import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import faker from 'faker';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const QuiltedImageList=() =>{
  const randomNum = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
  const imageUrl = `https://loremflickr.com/800/400/praque?random=${randomNum}`; 
  return (
    <ImageList
      sx={{ width: 300, height: 350 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}



const itemData = [
  {
    img: `https://loremflickr.com/800/400/food?random=${faker.datatype.number()}`,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: `https://loremflickr.com/800/400/burger?random=${faker.datatype.number()}`,
    title: 'Burger',
  },
  {
    img: `https://loremflickr.com/800/400/camera?random=${faker.datatype.number()}`,
    title: 'Camera',
  },
  {
    img: `https://loremflickr.com/800/400/coffee?random=${faker.datatype.number()}`,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: `https://loremflickr.com/800/400/hat?random=${faker.datatype.number()}`,
    title: 'Hats',
    cols: 2,
  },
  {
    img: `https://loremflickr.com/800/400/honey?random=${faker.datatype.number()}`,
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: `https://loremflickr.com/800/400/basketball?random=${faker.datatype.number()}`,
    title: 'Basketball',
  },
  {
    img: `https://loremflickr.com/800/400/fern?random=${faker.datatype.number()}`,
    title: 'Fern',
  },
  {
    img: `https://loremflickr.com/800/400/mushroom?random=${faker.datatype.number()}`,
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: `https://loremflickr.com/800/400/tomato?random=${faker.datatype.number()}`,
    title: 'Tomato basil',
  },
  {
    img: `https://loremflickr.com/800/400/seastar?random=${faker.datatype.number()}`,
    title: 'Sea star',
  },
  {
    img: `https://loremflickr.com/800/400/bike?random=${faker.datatype.number()}`,
    title: 'Bike',
    cols: 2,
  },
];



export default QuiltedImageList