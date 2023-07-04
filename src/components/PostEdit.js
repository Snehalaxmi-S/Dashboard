import React from 'react'
import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin'

const PostEdit = (props) => {
  return (
    <Edit title="Edit Post" {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <TextInput source='title'/>
            <TextInput multiline source='body'/>
            <DateInput label="published" source='publishedAt'/>
        </SimpleForm>

    </Edit>
  )
}

export default PostEdit