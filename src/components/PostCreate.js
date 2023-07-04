import React from 'react'
import { Create, DateInput, TextInput , SimpleForm } from 'react-admin';

const PostCreate = (props) => {
  return (
    <Create title='Create a post' {...props}>
        <SimpleForm>
            <TextInput source='title'/>
            <TextInput multiline source='email'/>
            <DateInput label='Published' source='publishedAt'/>
        </SimpleForm>
    </Create>
  )
}

export default PostCreate