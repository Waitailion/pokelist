import React from 'react'

export default function Pagination({ NextPage, PrevPage }) {
  return (
    <div>
       <button onClick={PrevPage}>Previous</button>
       <button onClick={NextPage}>Next</button>
    </div>
  )
}