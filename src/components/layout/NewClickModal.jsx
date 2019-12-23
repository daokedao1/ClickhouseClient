import React,{Component} from 'react';
import { Modal, Button } from 'antd';

class NewClickModal extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render(){
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
            Open Modal with customized footer
                </Button>

            </div>
        );
    }
}
export default NewClickModal;