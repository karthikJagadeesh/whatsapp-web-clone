import React from 'react';
import { Div, Img } from 'glamorous';

export const Picture = ({ currentFriend = '' }) => {
  return (
    <Div
      css={{
        display: 'grid',
        gridTemplateColumns: '1fr'
      }}
    >
      <Img
        css={{
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          alignSelf: 'center'
        }}
        alt=""
        src={currentFriend}
      />
    </Div>
  );
};
