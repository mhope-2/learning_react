import React from 'react'
import {ContactCard, ContactCardProps} from "./components/contactcard/ContactCard"
import contactData from './data/contactCardData'
import './App.css';

type ApplicationState = {
  contactComponentData: ContactCardProps[] //contact card
};


class App extends React.Component<{}, ApplicationState>{

  constructor(props: any){
    super(props)
    this.state = {
      contactComponentData: contactData
    }
  }

  componentDidMount(){
    document.title = "Index"
  }
  
  render(){

    // Get contact data from an array
    const contactDataItems = this.state.contactComponentData.map(contact => {
      return <ContactCard  key={contact.id} id={contact.id} name={contact.name} 
                           imgUrl={contact.imgUrl} phone={contact.phone} 
                           email={contact.email}
                         />
  })  

    return (
      <div>
        {contactDataItems}
        
     </div>
  )
  }
}

export default App;