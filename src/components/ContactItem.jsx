import React from 'react'
import { ContactItemImage } from './ContactItemImage'
import { ContactItemBody } from './ContactItemBody'
import { ButtonDelete } from './ButtonDelete'

export const ContactItem = ({ imageUrl, name, tag, id, onDelete }) => {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} id={id} onDelete={onDelete} />
      <ButtonDelete id={id} onDelete={onDelete} />
    </div>
  )
}
