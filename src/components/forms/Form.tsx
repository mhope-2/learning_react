import React from 'react';

interface FormProps{
    firstName: string,
    lastName: string,
    bio: string,
    isChecked: boolean
  }

interface FormState{
    firstName: string,
    lastName: string,
    bio: string,
    isChecked: boolean
}

export class Form  extends React.Component<FormProps, FormState> {

    constructor(props: FormProps){
      super(props)
      this.state = {
        firstName: "",
        lastName: "",
        bio: "",
        isChecked: false
      }
  
      // bind method to class (for setState())
      this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange = (e: React.FormEvent<any>) => {
        const { name, value, type, checked } = e.currentTarget
        type === "checkbox" ? this.setState({ [name]: checked } as unknown as Pick<FormState, keyof FormState>) : 
                              this.setState({ [name]: value } as unknown as Pick<FormState, keyof FormState>)
    }
  
      render(){
   
      return (
        <form action="" method="post" onSubmit={e=>e.preventDefault()}>
            <input 
                type="email" 
                name="firstName" 
                value={this.state.firstName} 
                id="" placeholder="first name" 
                onChange={this.handleChange}
                /><br /><br />

            <input type="text" 
                name="lastName" 
                value={this.state.lastName} 
                id="" 
                placeholder="last name" 
                onChange={this.handleChange}
                /><br /><br />

            <textarea 
                name="bio" 
                onChange={this.handleChange}      
            /><br/><br/>

            <label>
              
            <input 
                type="checkbox" 
                name="isChecked" 
                id=""
                checked={this.state.isChecked}
                onChange = {this.handleChange}
                />
                isChecked
            </label>

            <p>{this.state.firstName} {this.state.lastName} {this.state.bio}</p>
            <input type="submit" name="name" id="" value="Submit"/>
        </form>
      )
      }
    }
    