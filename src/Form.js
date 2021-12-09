
import React from 'react';
import './App.css';

class Form extends React.Component {
    
    constructor(props) {
        super(props);
        this.State ={  value:''};
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(event) {
        alert('Thank YOU! Your information was saved ');
      }
        render() {
            return (
             <form onSubmit={this.handleSubmit}>
        <div>

            <label className= "label"> Email</label>
            <input type= 'text' placeholder = 'Type Email' className= "textArea"/> 
            <label className= "label"> Full Name</label>
            <input type= 'text' placeholder = 'Type Full Name' className= "textArea"/> 
          
 </div>
            <label className= "label"> Message</label>
            <textarea placeholder = 'Type Message Here...' className= "textArea" rows= '10'></textarea>
 <div>
        <button type= "submit" className = "button" > Submit</button>
 </div>
            </form>
            )
            }
            
        }
    

    export default Form;