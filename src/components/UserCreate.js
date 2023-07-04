import React from 'react'
import { Create, DateInput, TextInput , SimpleForm, NumberInput, ImageInput } from 'react-admin';

const UserCreate = (props) => {
  return (
    <Create title='Create a user' {...props}>
        <SimpleForm>
            <NumberInput source='id'/>
            <TextInput source='firstName'/>
            <TextInput source='lastName'/>
            <TextInput source='status'/>
            <DateInput source='birthday'/>
            <TextInput source='skills'/>
            <ImageInput source='avatar'/>
        </SimpleForm>
    </Create>
  )
}

export default UserCreate