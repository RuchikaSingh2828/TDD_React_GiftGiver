import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button, FormLabel } from 'react-bootstrap';

export default class Gift extends Component {
    constructor(){
        super();

        this.state = { person: '',  present: ''};
    }
    render() {
        return (
            <div className="gift">
                <Form>
                    <FormGroup>
                        <FormLabel>Person</FormLabel>
                        <FormControl 
                            className='input-person'
                            onChange={event => this.setState({person: event.target.value})} />
                        <FormLabel>Present</FormLabel>
                        <FormControl 
                            className='input-present'
                            onChange={event => this.setState({present: event.target.value})} />
                    </FormGroup>
                </Form>
                <Button 
                    className="btn-remove"
                    onClick={() => this.props.removeGift(this.props.gift.id)}
                    >Remove Gift</Button>
            </div>
        )
    }
}
