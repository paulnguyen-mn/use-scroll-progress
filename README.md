# useScrollProgress hook

This helps you how progress that you've scroll on a container.

A container can be either
- Window object (full page scroll)
- Any scrolling element (container scroll)

Check it out the demos:

### Full page scroll demo

![Full page scroll demo](https://media.giphy.com/media/cnheCcylP3QnDSYPVP/giphy.gif)


### Container scroll demo

![Container scroll demo](https://media.giphy.com/media/Tgxtz8CMW04NzEmphv/giphy.gif)


## How the useScrollProgress() hook is implemented

> Browse the file at /src/hooks/useScrollProgress

## How to use it

```js 
// Full page scroll
const {progress, isAtBottom} = useScrollProgress({
  isFullPageScroll: true,
  onBottomReach: () => console.log('Yay ... bottom reach 🎉'),
})
```

```js 
// Container scroll
const {progress, isAtBottom} = useScrollProgress({
  isFullPageScroll: false,
  containerRef: DOMElement ,
  onBottomReach: () => console.log('Yay ... bottom reach 🎉'),
})
```

### Props

- `isFullPageScroll`: boolean - Indicate whether using page scroll or container scroll. 
- `containerRef`: object - If isFullPageScroll = false, you need to set this to a DOMElement.
- `onBottomReach`: function - A callback when user scroll to the bottom of the container.

### Output

- `progress`: number - A value in range of [0, 100] indicating the progress of scrolling.
- `isAtBottom`: boolean - Let you know if user is at bottom of the container or not.

> When isAtBottom = true, I use approximately check only, it means if the scrolling distance is less than or equal to 15px, I'll treat it at bottom. 🙂

License: MIT