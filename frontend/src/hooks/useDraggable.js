import { useState } from 'react'

export default function useDraggable(initialPosition = { x: 0, y: 0 }) {
  return useState(initialPosition)
}
