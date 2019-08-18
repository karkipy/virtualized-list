## Demo

http://bit.ly/2Hch6XW

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



## Output

![alt typeahead in use](assets/first.png)

![alt typeahead on select](assets/second.png)


