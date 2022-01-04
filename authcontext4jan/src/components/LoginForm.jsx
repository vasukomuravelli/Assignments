import React from 'react';
import {AuthContext} from "../contexts/AuthContext"
import { Form, Input, Button, Checkbox } from 'antd';

export const Loginform = () => {
    const {isAuth, ToggleAuth } = React.useContext(AuthContext);
    const [form, setForm] = React.useState(null);
    const [token, setToken] = React.useState(null);
    const handleChange = (e) => {
        let { value, id } = e.target;
        id = id === "basic_username" ? "email" : "password";
        setForm({...form, [id]: value });
        
    }
    const makelogin = (e) => {
        e.preventDefault();
        fetch("https://reqres.in/api/login", {
            method: "POST",
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json()).then(res =>{ToggleAuth();setToken(res.token)});
    }
    return (
        <>
            {isAuth === "Login" ? <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 4 }}
      initialValues={{ remember: true }}
    autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}        
      >
        <Input name="username" onChange={(e)=>{handleChange(e)}}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}        
      >
        <Input.Password name="password" onChange={(e)=>{handleChange(e)}}/>
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={(e)=>makelogin(e)}>
          Submit
        </Button>
      </Form.Item>
    </Form> : null}
            {token ? <p style ={{fontSize:"x-large",marginLeft : "27%",color : "#002766",fontWeight:"600"}}>{form.email} is Loggedin with token id : {token}</p> : null}   
        </>
    )
}