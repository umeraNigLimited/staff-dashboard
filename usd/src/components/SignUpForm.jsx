import React, { useState } from 'react';
import { Auth, ColumnFlex, RowFlex, AuthRowFlex } from './styled/Form';
import Label from './Label';
import Input from './Input';
import Select from './Select';
import Option from './Option';
import Button from './styled/Button';
import { Span } from './styled/Text';
import { AuthButton } from './styled/Header';


function SignUpForm() {
  // Initializing state for single selected role and department
  const [role, setRole] = useState(""); 
  const [department, setDepartment] = useState("");

  // Handlers for updating state on change
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <Auth>
      <ColumnFlex>
        <Label htmlFor="id" name="Staff ID" />
        <Input placeholder="UMS-RD-010" name="id" id="id"/>
      </ColumnFlex>

      <ColumnFlex>
        <Label htmlFor="office_email" name="Work Email" />
        <Input placeholder="emmanuelolafusi@umera.ng" name="office_email" id="office_email" />
      </ColumnFlex>

      <RowFlex>
        <ColumnFlex>
          <Label htmlFor="role" name="Role" />
          <Select id="role" value={role} onChange={handleRoleChange}>
            <Option value="Staff" name="Staff" />
            <Option value="Intern" name="Intern" />
            <Option value="NYSC" name="NYSC" />
          </Select>
        </ColumnFlex>

        <ColumnFlex>
          <Label htmlFor="department" name="Department" />
          <Select id="department" value={department} onChange={handleDepartmentChange}>
            <Option value="R&D" name="R&D" />
            <Option value="Media" name="Media" />
            <Option value="Accounting" name="Accounting" />
            <Option value="Portfolio" name="Portfolio" />
            <Option value="Admin" name="Admin" />
            <Option value="IT" name="IT" />
            <Option value="Forex" name="Forex" />
            <Option value="Farms" name="Farms" />
          </Select>
        </ColumnFlex>
      </RowFlex>

      <ColumnFlex>
        <Label htmlFor="password" name="Password" />
        <Input placeholder="" name="password" id="password"/>
      </ColumnFlex>
     <Button $variant='outline'>SIGN UP</Button>
     <AuthRowFlex>
     <Span>Already have an Account?</Span>
     <AuthButton>Sign In</AuthButton>
     </AuthRowFlex>
    </Auth>
  );
}

export default SignUpForm;
