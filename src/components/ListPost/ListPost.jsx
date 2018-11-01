import React from 'react';
import ListPostItem from './ListPostItem/ListPostItem';

const ListPost = ({ listItem, onClicked }) => (
  <>
    <div className="row">
      {listItem.map(item => (
        <ListPostItem
          key={item.id}
          clicked={() => onClicked(item.id)}
          {...item}
        />
      ))}
    </div>
  </>
);

export default ListPost;
