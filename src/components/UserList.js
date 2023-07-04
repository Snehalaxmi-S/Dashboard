import React from 'react'
import { ArrayField, Datagrid, DateField, DeleteButton, EditButton, FieldToggle, ImageField, List, NumberField, TextField } from 'react-admin'

const UserList = (props) => {
  return (
    <List {...props}>
        <Datagrid>
            <NumberField source='id'/>
            <TextField source='firstName'/>
            <TextField source='lastName'/>
            <TextField source='status'/>
            <DateField source='birthday'/>
            <TextField source='skills'/>
            <ImageField source='avatar'/>
            <EditButton basePath="/users/"/>
            <DeleteButton basePath="/users/"/>
        </Datagrid>
    </List>
  )
}

export default UserList