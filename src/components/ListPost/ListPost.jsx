import React from 'react';
import ListPostItem from './ListPostItem/ListPostItem';

const ListPost = () => (
  <>
    <div className="row">
      <ListPostItem title="List Post 1" autor="Virginia" />
      <ListPostItem title="List Post 2" autor="Caro" />
      <ListPostItem title="List Post 3" autor="Diego" />
    </div>
  </>
);

export default ListPost;
