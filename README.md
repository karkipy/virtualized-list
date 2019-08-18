## Demo

http://bit.ly/2Hch6XW


## Demo app

```javascript
yarn

yarn start
```

## About

This is a skeleton for a virtualized list component. Highly influnced by react native's flat list


## Installation

```javascript
  yarn add virtualized-list-skeleton
```
   OR
```javascript
  npm install virtualized-list-skeleton
```
## Props

1. data: array of the options to render in list
2. renderItem: is a function to render an individual item  from above list.
3. keyExtractor: (optional) function to extract unique key from individual item from above list.
4. defaultNumberofItems: (optional) number of items to show at the start, default is 10


## Styling

In your app where you use this library make your own custom css and import it with these params to
change the styling of the component

1. virtualized-list-container: the overall container of the component you can change width, background color, color and font size, make sure that you provide a fix height for this container.

2. virtualized-list-item: its optional as in render item you can style your individual child items.



## Demo

```javascript
  import React from 'react';
  import VirtualizedList from 'virtualized-list-skeleton';

  function App() {
    return (
      <VirtualizedList
        data={data}
        renderItem={(item) => {
          return (
            <div style={{ margin: '30px', background: 'lightgray' }}>
              {item}
            </div>
          );
        }}
      />
    );
  }

```

## Output

<img width="709" alt="Screen Shot 2019-08-18 at 7 54 57 PM" src="https://user-images.githubusercontent.com/12614476/63228404-3d96be80-c212-11e9-89b0-7d1358d9cb7a.png">


<img width="783" alt="Screen Shot 2019-08-18 at 7 55 19 PM" src="https://user-images.githubusercontent.com/12614476/63228405-3e2f5500-c212-11e9-9360-f8a15cf8d7da.png">



