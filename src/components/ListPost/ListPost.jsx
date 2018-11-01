import React from 'react';
import ListPostItem from './ListPostItem/ListPostItem';

const ListPost = ({ listItem }) => (
  <>
    <div className="row">
      {listItem.map(item => (
        <ListPostItem key={item.id} {...item} />
      ))}
    </div>
  </>
);

export default ListPost;
