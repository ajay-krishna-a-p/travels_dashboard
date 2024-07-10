import React from 'react'
import { Spinner } from 'react-bootstrap';

export default function Loading() {
  return (
   <Spinner animation="grow" size="lg" style={{ color: "primary", display: "inline-block", position: "relative", top: "50%", left: "50%" }} />
  )
}
