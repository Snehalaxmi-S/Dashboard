import React from 'react'
import { Datagrid, DateField, DeleteButton, EditButton, List, TextField } from 'react-admin'

const PostList = (props) => {
  return (
    <List {...props}>
        <Datagrid>
            <TextField source='id'/>
            <TextField source='title'/>
            {/* <TextField source='slug'/>
            <TextField source='content'/>
            <TextField source='category'/>
            <TextField source='user'/>
            <TextField source='status'/>
            <TextField source='status_color'/>
            <DateField source='createdAt'/> */}
            <DateField source='publishedAt'/>
            {/* <TextField source='image'/>
            <TextField source='tags'/>
            <TextField source='language'/> */}
            <EditButton basePath="/posts/"/>
            <DeleteButton basePath="/posts/"/>
        </Datagrid>
    </List>
  )
}

export default PostList