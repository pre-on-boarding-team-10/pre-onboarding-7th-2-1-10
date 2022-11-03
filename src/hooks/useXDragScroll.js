import { useState, useRef } from 'react';

const useXDragScroll = () => {
  const scrollRef = useRef(null);

  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  const onDragStart = e => {
    setIsDrag(true);
    setStartX(e.pageX + scrollRef?.current?.scrollLeft);
  };
  const onDragMove = e => {
    if (isDrag) {
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };
  const onDragEnd = () => {
    setIsDrag(false);
  };

  return { scrollRef, onDragStart, onDragMove, onDragEnd };
};

export default useXDragScroll;
