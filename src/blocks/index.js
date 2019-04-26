import Text from './text'
import Column from './column'
import Container from './container'
import Table from './table'
import Form from './form'
import Button from './button'

export default (editor, opts) => {

  Container(editor, opts)
  Column(editor, opts)
  Text(editor, opts)
  Table(editor, opts)
  Form(editor, opts)
  Button(editor, opts)

}