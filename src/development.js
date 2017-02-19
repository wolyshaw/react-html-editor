import React from 'react'
import {render} from 'react-dom'
import Editor from './editor'
let edit
render(
  <Editor ref={n => edit = n} setImage={() => edit.setImage('https://images.pexels.com/photos/242814/pexels-photo-242814.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb')}/>,
  document.getElementById('app')
)
