import React from 'react';
import { ContactList } from './ContactList';

import '../styles/App.css'
import { GetData } from '../utils/GetData';

export const ContactApp = () => {
 // const contacts = GetData();
 // console.log(GetData)

 return (
   <div className="contact-app">
     <h1>Daftar Kontak</h1>
     <ContactList contacts={GetData()} />
   </div>
 );
}
