import React from 'react'

export const ContactItemBody = ({ name, tag }) => {
  return (
    <div className="contact-item__body">
      <h5 className="contact-item__title">{name}</h5>
      <h6 className="contact-item__username">@{tag}</h6>
    </div>
  )
}
