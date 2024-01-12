import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

export default function NLink({ to, children, ...otherProps }) {
  return (
    <Link component={RouterLink} to={to} {...otherProps}>
      {children}
    </Link>
  );
}
