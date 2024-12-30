import React from 'react'
import { LabelStyle } from './styled/Form';

function Label({ htmlFor, name }) {
    return (
      <LabelStyle htmlFor={htmlFor}>
        {name}
      </LabelStyle>
    );
  }

export default Label