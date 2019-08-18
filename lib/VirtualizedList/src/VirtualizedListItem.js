// @flow
import React from 'react';

type Props = {
  renderItem: () => void,
  value: any,
}

function VirtualizedListItem({ renderItem, value }: Props) {
  return (
    <div className="virtualized-list-item ">
      {renderItem(value)}
    </div>
  );
}

export default React.memo(VirtualizedListItem);
