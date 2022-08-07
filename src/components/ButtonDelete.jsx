import React from 'react'

export const ButtonDelete = ({ id, onDelete }) => {
  return (
    <button className='contact-item__delete' onClick={() => onDelete(id)}>
      Delete
    </button>
  )
}
