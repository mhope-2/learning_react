import React from 'react';

interface FormProps{
    firstName: string,
    lastName: string,
    bio: string,
    isChecked: boolean,
    gender: string,
    favColor:string
  }

interface FormState{
    firstName: string,
    lastName: string,
    bio: string,
    isChecked: boolean,
    gender: string,
    favColor: string
}

export class Form  extends React.Component<FormProps, FormState> {

    constructor(props: FormProps){
      super(props)
      this.state = {
        firstName: "",
        lastName: "",
        bio: "",
        isChecked: false,
        gender: "",
        favColor:"blue"
      }
  
      // bind method to class (for setState())
      this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange = (e: React.FormEvent<any>) => {
        const { name, value, type, checked } = e.currentTarget
        type === "checkbox" ? this.setState({ [name]: checked } as unknown as Pick<FormState, keyof FormState>) : 
                              this.setState({ [name]: value } as unknown as Pick<FormState, keyof FormState>)
    }

    handleSubmit= ()=>{
        let formData = {
          firstName: this.state.firstName,
          lastName: this.state.lastName

        }

        // make axios post request
    }
  
      render(){
   
      return (
        <form action="" method="post" onSubmit={this.handleSubmit}>
            <input 
                type="text" 
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
            </label><br/><br/>

            <label>
            <input 
                type="radio" 
                name="gender"
                value="male"
                id=""
                checked={this.state.gender === "male"}
                onChange = {this.handleChange}
                />
                Male
            </label>

            <label>
            <input 
                type="radio" 
                name="gender"
                value="female" 
                id=""
                checked={this.state.gender === "female"}
                onChange = {this.handleChange}
                />
                Female
            </label><br /><br />

            <label>Favorite Colour:</label><br />
            <select 
                value={this.state.favColor}
                onChange = {this.handleChange}
                name="favColor"
            >
                <option value="blue">-- Select Colour --</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
            </select>


            <p>{this.state.firstName} {this.state.lastName} {this.state.bio} {this.state.isChecked} {this.state.gender}</p>
            {/* <input type="submit" name="name" id="" value="Submit"/> */}
            <button type="submit">Submit</button>
        </form>
      )
      }
    }
    