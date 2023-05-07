### Codemon

```tsx
 // #note don't forget to add React when you catch the type by hovering for typescript
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    console.log(e.pageX);
  }

  return (
    <div onMouseMove={(e) => handleMouseMove(e)}/>
```

### useTransform

```ts
const mouseX = useMotionValue(0);
const width = useTransform(mouseX, [0, 300], [40, 100]);
//   #note when mouseX = 0 then width = 40
// and when mouseX = 300 then width = 100
```
