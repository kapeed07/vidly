import React from 'react';
import {
  Icon
} from 'antd'

const Like = ({liked, toggleLike}) => {
  return (
    <div>
      <Icon
        onClick={ toggleLike }
        theme={ liked ? 'filled' : '' }
        type="heart">
      </Icon>
    </div>
  );
}
 
export default Like;