/**
  * Usage Example
  import EmptyState from 'GenericComponents/emptyState';
  <EmptyState />
*/

import React from 'react';
import defaultImage from '../../assets/EmptyState.svg';
import style from './EmptyState.module.scss';

const EmptyState = ({title, description}) => {
  return (
    <div className={style['empty-state']} data-testid="empty-state">
      <div
        className="image"
        style={{
          backgroundImage: `url(${defaultImage})`
        }}
      />
      <div className='empty-state-text'>
          <div className="title">{title}</div>
          <div className="description">{description}</div>
      </div>

    </div>
  );
};

export default React.memo(EmptyState);
