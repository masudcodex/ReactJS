import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';

class Contact extends Component{
    constructor(props){
    super(props);
    this.state = {
        firstName : "",
        lastName : "",
        tel : "",
        email : "",
        agree : false,
        contactType : "Tel.",
        message : ""
        }
    }
    
    render(){
        return(
            <div>

            </div>
        );
    }
}

export default Contact;