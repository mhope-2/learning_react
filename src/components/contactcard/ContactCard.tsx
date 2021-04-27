import React from 'react';


export interface ContactCardProps {  
    id: number,
    name: string,
    imgUrl: string,
    phone: string,
    email: string
}

export interface ContactCardState {
  message: string,
  isLoggedIn: boolean,
  count: number
}

export class ContactCard  extends React.Component<ContactCardProps, ContactCardState> {

  constructor(props: ContactCardProps){
    super(props)
    this.state = {
      message: "I am from the state",
      isLoggedIn: true,
      count: 0,
    }

    // bind method to class (for setState())
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleImgHover = this.handleImgHover.bind(this)
  }

  

  // class methods
  handleImgHover = (id:number)=>{console.log(id)}

  handleBtnClick = () => this.setState(previousState =>{
        return {
          count: previousState.count + 1
        }        
  })

    render(){
 
    return (
      <div className="contact-card">
        <img onMouseOver={() => this.handleImgHover(this.props.id)} src = {this.props.imgUrl} alt="" />
        <h3>Name: {this.props.name}</h3>
        <p>Phone: {this.props.phone}</p>
        <p>Email: {this.props.email}</p>
        <p>{this.state.isLoggedIn ? 'You are logged in': 'You are not logged in'}</p>
        <p>{this.state.count}</p>
        <button onClick={this.handleBtnClick}>Change State</button><br/><br/>
      </div>
    )
    }
  }
  
  // export default ContactCard