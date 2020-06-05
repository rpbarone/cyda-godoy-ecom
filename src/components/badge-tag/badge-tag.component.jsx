import React from 'react';
import { Link } from 'react-router-dom';

import './badge-tag.styles.scss';

const BadgeTag = ({ content, redirect }) => (
  <Link to={redirect} className='st badge less-bg'>{ content }</Link>
);

export default BadgeTag;