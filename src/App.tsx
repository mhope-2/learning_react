import React from 'react'
import {ContactCard, ContactCardProps} from "./components/contactcard/ContactCard"
import { Form } from "./components/forms/Form"
import contactData from './data/contactCardData'
import './App.css';
import axios from 'axios';


type ApplicationState = {
  contacts: ContactCardProps[], //contact card
  isLoading: boolean,
  character: any
};


class App extends React.Component<{}, ApplicationState>{

  constructor(props: any){
    super(props)
    this.state = {
      contacts: contactData,
      isLoading: false,
      character: {}
    }
  }


  // Life Cycle methods
  componentDidMount(){
    document.title = "Index"

    // change loading state to true before api fetch
    this.setState({isLoading:true})

    // GET request for remote image in node.js
    axios({
      method: 'GET',
      url: 'https://swapi.dev/api/people/1',
      responseType: 'json'
    })
    .then(res => {
        this.setState({ 
          character: res.data,
          isLoading: false
        })
      })
    .catch(err =>{
      console.log(err)
    })



    // setTimeout(()=>{
    //     this.setState({
    //       isLoading: false
    //     })
    // }, 1500)


  }

  componentDidUpdate(){
     
  }

  // static getDerivedStateFromProps(props:any, state:any){
  //   // return the new updated state based on the props

  // }


  // DEPRECATED 
  // componentWillReceiveProps(nextProps:any){
  //   // call if changes are to be made to an incoming props object
  //   if (nextProps.option !== ''){ // check for changes in incoming props
  //       // Take an action
  //   } 
  // }

  // getSnapshotBeforeUpdate(){
  //   // create a backup of the way things are
  // }

  shouldComponentUpdate(nextProps:any, nextState:any){
    // return true if want to update; return false otherwise
    return true

  }

  componentWillUnmount(){
    // clean up or tear down before component disappears
    // remove event listeners

  }

  // class methods
  handleChange(id: number){
    this.setState(previousState=>{
      const updatedContacts = previousState.contacts.map(contact=>{
          if (contact.id === id){
              contact.name = "Changed Name"
          }
          return contact
      })  
      return {
        contacts : updatedContacts
      }
    })

    //binding
    this.handleChange = this.handleChange.bind(this)
  }

  
  render(){

    // Get contact data from an array
    const contactDataItems = this.state.contacts.map(contact => {
      return <ContactCard  key={contact.id} id={contact.id} name={contact.name} 
                           imgUrl={contact.imgUrl} phone={contact.phone} 
                           email={contact.email}
                         />
  })   
    return (
      <div>
        {this.state.isLoading ? <p>Loading...</p> : contactDataItems }
        {this.state.isLoading ? <p>Loading...</p> : this.state.character.name}<br/>

        <Form firstName="" lastName="" bio="" isChecked={false} gender="" favColor=""/><br/><br/>
      </div>
      
    )
  }
    
  }

export default App;