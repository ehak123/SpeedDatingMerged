import StartPageView from '../pages/index';

import React from 'react';
import PropTypes from 'prop-types';


export default function Layout({ variant }) {
  return (
    <div>
      {variant === 'StartPageView' && StartPageView}
    </div>
  )
}

Layout.defaultProps = {
  variant: 'StartPageView'
};