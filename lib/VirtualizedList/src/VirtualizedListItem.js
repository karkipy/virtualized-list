// @flow
import React, { useEffect, useRef } from 'react';

type Props = {
  height: number,
  renderItem: () => void,
  value: any,
  index: number,
  setIndex: () => void,
}

function VirtualizedListItem({ height, renderItem, value, index, setIndex }: Props) {
  const ref = useRef();
  useEffect(() => {
    const { current } = ref;
    if (current) {
      if (current.offsetTop >= height) {
        setIndex(index);
      }
    }
  }, [ref, index, setIndex, height]);

  return (
    <div ref={ref} className="virtualized-list-item ">
      {renderItem(value)}
    </div>
  );
}

export default React.memo(VirtualizedListItem);
