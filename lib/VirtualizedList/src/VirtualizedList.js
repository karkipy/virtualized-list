// @flow
import React, { useState, useRef, useEffect, useCallback } from 'react';
import VirtualizedListItem from './VirtualizedListItem';
import './VirtualizedList.css';

type Props = {
  renderItem: () => void,
  data: Array,
  keyExtractor: () => void,
  defaultNumberofItems ?: number,
}

function VirtualizedList({
  renderItem, data, keyExtractor, defaultNumberofItems,
}: Props) {
  const ref = useRef();
  const renderItemIncrement = 1;
  const [index, setIndex] = useState(defaultNumberofItems);

  const scrollHandler = useCallback((e) => {
    // check if it e.deltaY is positive as it denotes down scroll
    if (e.deltaY === 1) {
      setIndex(prev => prev + renderItemIncrement);
    }
  }, [setIndex, renderItemIncrement]);

  useEffect(() => {
    const { current } = ref;
    current.addEventListener('wheel', scrollHandler);
    return () => {
      current.removeEventListener('wheel', scrollHandler);
    };
  }, [ref, scrollHandler]);

  return (
    <div ref={ref} className="virtualized-list-container">
      {data.map((d, idx) => {
        const key = keyExtractor ? keyExtractor(d) : d;
        if (idx > index) return null;
        return (
          <VirtualizedListItem
            key={key}
            value={d}
            renderItem={renderItem}
          />
        );
      })}

    </div>
  );
}

VirtualizedList.defaultProps = {
  defaultNumberofItems: 10,
};

export default VirtualizedList;
