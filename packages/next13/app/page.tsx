'use client'
import React, { useRef } from 'react'
import { Button } from '@libs/react-component'

export default function Page() {
  const ref = useRef<HTMLButtonElement>(null)
  return (
    <h1>
      <Button text="button" ref={ref} />
    </h1>
  )
}
