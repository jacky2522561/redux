import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/reset.css';
import store from './store/index'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handlevaluechange = this.handlevaluechange.bind(this);
        this.handlestorechange = this.handlestorechange.bind(this);
        this.handlebtnclick = this.handlebtnclick.bind(this);
        store.subscribe(this.handlestorechange);
    }

    render() {
        return (
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                <div>
                    <Input
                        value={this.state.inputvalue}
                        placeholder='todo info'
                        style={{ width: '300px', marginRight: '10px' }}
                        onChange={this.handlevaluechange}
                    />
                    <Button
                        type="primary"
                        onClick={this.handlebtnclick}
                    >Submit</Button>
                </div>
                <List
                    style={{ marginTop: '10px', width: '300px' }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item) => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }

    handlevaluechange(e) {
        const action = {
            type: 'change_this_value',
            value: e.target.value
        }
        store.dispatch(action);
    }

    handlestorechange() {
        this.setState(store.getState());
    }

    handlebtnclick() {
        const action={
            type: 'clickbtn'
        }
        store.dispatch(action);
    }
}

export default TodoList;
