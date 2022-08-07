import React from 'react';
import { ContactList } from './ContactList';

import '../styles/App.css'
import { GetData } from '../utils/GetData';

// export const ContactApp = () => {
//  // const contacts = GetData();
//  // console.log(GetData)
//
//  return (
//    <div className="contact-app">
//      <h1>Daftar Kontak</h1>
//      <ContactList contacts={GetData()} />
//    </div>
//  );
// }

export class ContactApp extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     contacts: GetData(),
   }

   this.onDeleteHandler = this.onDeleteHandler.bind(this);
 }

 onDeleteHandler(id) {
   const contacts = this.state.contacts.filter(contact => contact.id !== id);
   this.setState({ contacts });
 }

 render() {
   return (
     <div className="contact-app">
       <h1>Daftar Kontak</h1>
       <ContactList
       contacts={this.state.contacts}
       onDelete={this.onDeleteHandler} />
     </div>
   );
 }
}
