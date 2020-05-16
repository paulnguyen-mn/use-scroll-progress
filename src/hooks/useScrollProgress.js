import { useState, useEffect, useRef } from "react";
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';

const getWindowScrollHeight = () => {
  // Refs: https://javascript.info/size-and-scroll-window
  return Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
}

const useScrollProgress = (props) => {
  const { isFullPageScroll, containerRef, onBottomReach } = props;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Why useRef, as the side effect will re-run when updating isAtBottom state
  // Using block variable in the side effect will cause this var is reset every time this side effect re-run
  const lastScrollTopRef = useRef(0);

  // Listen to scroll event
  useEffect(() => {
    const scrollContainerRef = isFullPageScroll ? window : containerRef;
    if (!scrollContainerRef) return;

    // Handle container scroll
    let lastScrollTop = lastScrollTopRef.current;

    const triggerBottomReach = debounce(() => {
      onBottomReach();
      setIsAtBottom(true);
    }, 300)

    const calculateScrollDistance = () => {
      const scrollTop = isFullPageScroll ? window.pageYOffset : scrollContainerRef.scrollTop;
      const scrollHeight = isFullPageScroll ? getWindowScrollHeight() : scrollContainerRef.scrollHeight;
      const clientHeight = isFullPageScroll ? document.documentElement.clientHeight : scrollContainerRef.clientHeight
      const totalDocScrollLength = scrollHeight - clientHeight;

      const scrollPosition = Math.floor(scrollTop / totalDocScrollLength * 100);
      setScrollPosition(scrollPosition);

      // if user is scrolling down to bottom (approximately)
      const isScrollingDown = scrollTop > lastScrollTop;
      const isAlmostReachBottom = (totalDocScrollLength - scrollTop) <= 15;
      if (onBottomReach && isScrollingDown && isAlmostReachBottom) {
        triggerBottomReach();
      }

      // Reset isAtBottom state if user are scrolling up and not at bottom
      // In case scrollTop is unchanged, dont treat it as either scrolling down or up
      const isScrollingUp = scrollTop < lastScrollTop;
      if (isScrollingUp && !isAlmostReachBottom && isAtBottom) {
        setIsAtBottom(false);
      }

      lastScrollTopRef.current = scrollTop;
    }

    const handleScrollChange = () => {
      requestAnimationFrame(calculateScrollDistance);
    }

    // Throttle scrolling every 100ms including leading and trailing
    const throttleScroll = throttle(handleScrollChange, 100);
    scrollContainerRef.addEventListener('scroll', throttleScroll);

    // Clean up listener when component is unmount
    return () => {
      scrollContainerRef.removeEventListener('scroll', throttleScroll);
    }
  }, [isAtBottom, isFullPageScroll, containerRef, onBottomReach]);

  return {
    progress: scrollPosition,
    isAtBottom
  };
}

export default useScrollProgress