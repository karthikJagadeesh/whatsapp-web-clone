import React, { Component } from 'react';
import glamorous, { Div, Label, Img, P, Span } from 'glamorous';

const NameAndLastChat = ({ name, lastChat }) => {
  return (
    <Div css={{ paddingLeft: '10px' }}>
      <Div>
        <Label>{name}</Label>
      </Div>
      <Div>
        <P
          css={{
            width: '260px',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            color: 'rgba(0, 0, 0, 0.6)',
            fontSize: '0.9em',
            margin: '0px'
          }}
        >
          {lastChat}
        </P>
      </Div>
    </Div>
  );
};

export const FriendsListItem = ({ picture: picture = '', ...props }) => {
  // FIXME Move this outside and glamorous offers a way to change style based on props.
  // Lookup that API
  const FriendsListItemBox = glamorous.div(
    {
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
      background: '#fff',
      wordWrap: 'break-word',
      display: 'grid',
      height: '80px',
      zIndex: '10',
      gridTemplateColumns: '20% 55% 25%',
      ':hover': {
        background: '#F4F5F5',
        cursor: 'pointer'
      }
    },
    _ => {
      if (props.type === 'nameGroup') return { pointerEvents: 'none' };
      if (props.selectedFriend === props.id)
        return {
          background: '#e9ebeb',
          ':hover': {
            cursor: 'pointer'
          }
        };
    }
  );

  // FIXME Do you need onClickCapture? If so explain. Also Read about label html element

  // FIXME Break this down into smaller components and give them meaningful names.
  // This is just a wall of text (Line 63 -153) that's ust hard to read.
  return (
    <FriendsListItemBox
      data-id={props.id}
      onClick={({ currentTarget }) =>
        props.handleFriendClickInList(currentTarget.dataset.id)
      }
    >
      <Div
        css={{
          display: 'grid',
          gridTemplateColumns: '100%'
        }}
      >
        {props.type === 'newGroup' ? (
          <Span
            css={{
              background: '#348C7D',
              borderRadius: '50%',
              width: '70%',
              height: '70%',
              alignSelf: 'center',
              justifySelf: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <props.icon size={35} color="#FFFFFF" />
          </Span>
        ) : props.type === 'nameGroup' ? (
          <Span
            css={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#348C7D',
              fontSize: '1.2em'
            }}
          >
            {props.name}
          </Span>
        ) : (
          <Img
            css={{
              borderRadius: '50%',
              width: '70%',
              height: '70%',
              alignSelf: 'center',
              justifySelf: 'center'
            }}
            alt=""
            src={picture}
          />
        )}
      </Div>
      <Div
        css={{
          width: '100%',
          alignSelf: 'center',
          justifySelf: 'start',
          ':hover': {
            cursor: 'pointer'
          }
        }}
      >
        {props.type !== 'nameGroup' ? (
          <NameAndLastChat
            name={props.name}
            lastChat={
              props.type === 'allFriendsList' ? props.status : props.lastChat
            }
          />
        ) : null}
      </Div>
      <Div
        css={{
          color: 'rgba(0, 0, 0, 0.4)',
          fontSize: '0.8em',
          display: 'grid',
          height: '50%',
          width: '100%',
          alignSelf: 'center'
        }}
      >
        <Label
          css={{
            alignSelf: 'start',
            justifySelf: 'center'
          }}
        >
          {props.timestamp}
        </Label>
      </Div>
    </FriendsListItemBox>
  );
};
