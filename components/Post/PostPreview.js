import * as React from 'react';
import Router from 'next/router';
import Card from 'components/Card';

const PostPreview = props => (
  <Card {...props} onClick={() => Router.push(`/posts${props.link}`)}>
    {props.readTime} minute read
  </Card>
);

export default PostPreview;
