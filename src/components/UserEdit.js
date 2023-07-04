import React from 'react'
import { DateInput, DeleteButton, Edit, EditButton, ImageInput, NumberInput, SimpleForm, TextInput } from 'react-admin'

const UserEdit = (props) => {
  return (
    <Edit title="Edit Post" {...props}>
        <SimpleForm>
            <NumberInput disabled source='id'/>
            <TextInput source='firstName'/>
            <TextInput source='lastName'/>
            <TextInput source='status'/>
            <DateInput source='birthday'/>
            <TextInput source='skills'/>
            <ImageInput source='avatar'/>
        </SimpleForm>

    </Edit>
  )
}

export default UserEdit