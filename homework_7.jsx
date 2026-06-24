import { useState, useRef, useLayoutEffect } from 'react'

function App() {
  const boxRef = useRef(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const updateSize = () => {
      const rect = boxRef.current.getBoundingClientRect()

      console.log('useLayoutEffect')
      console.log('Ширина:', rect.width)
      console.log('Высота:', rect.height)

      setSize({
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      })
    }

    updateSize()

    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
      }}
    >
      <div
        ref={boxRef}
        style={{
          width: '50vw',
          height: '200px',
          backgroundColor: 'lightblue',
        }}
      />
      <h2>
        Ширина: {size.width}px, Высота: {size.height}px
      </h2>
    </div>
  )
}

export default App
