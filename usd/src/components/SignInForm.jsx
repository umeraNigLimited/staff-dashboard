import React from 'react'
import { Auth, ColumnFlex } from './styled/Form'
import Label from './Label'
import Input from './Input'
import Button from './styled/Button'
import { Heading1, Heading2 } from './styled/Text'

const columFlexContent = [{
  label : {
      htmlFor : 'id',
      name : "Staff ID"
  },
  input: {
      placeholder: "UMS-RD-010",
      name : "id"
  }
},
{
label : {
  htmlFor : 'office_email',
  name : "Work Email"
},
input: {
  placeholder: "emmanuelolafusi@umera.ng",
  name : "office_email"
}
},
{
  label : {
    htmlFor : 'password',
    name : "Password"
  },
  input: {
    placeholder: "**************",
    name : "password"
  }
  },

]

function SignInForm() {
  return (
  <Auth>
{columFlexContent.map(({label : {htmlFor , name}, input : {placeholder}}, key) => {
return (
    <ColumnFlex key={key}>
      <Label htmlFor={htmlFor} name={name}/>
      <Input placeholder={placeholder} name={htmlFor}/>
    </ColumnFlex>
)
})}
  <Button variant=''>SIGN IN</Button>
  </Auth>
  )
}

export default SignInForm;