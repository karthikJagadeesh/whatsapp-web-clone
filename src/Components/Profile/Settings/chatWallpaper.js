import React from 'react';
import { Div, Span } from 'glamorous';
import { Subscriber } from 'react-broadcast';

import { Header } from '../ProfileInfo';
import { colors } from '../../../utils';

const ColorBox = ({
  color,
  index,
  selectedColor,
  handleColorBoxClick,
  handleColorBoxHover,
  handleColorBoxHoverOut,
  hoveredColor
}) => {
  const boxStyle = {
    width: '80px',
    height: '80px',
    background: color,
    display: 'inline-block',
    margin: '10px 0px 0px 12px',
    ':hover': {
      cursor: 'pointer'
    }
  };
  // black inset shadow for selected color and white for currently hovered
  if (selectedColor === index) boxStyle.boxShadow = 'inset 0 0 0px 3px #000000';
  else if (hoveredColor === index && hoveredColor !== selectedColor)
    boxStyle.boxShadow = 'inset 0 0 0px 4px #ffffff';
  else boxStyle.boxShadow = 'none';

  return (
    <Div
      css={boxStyle}
      onClick={({ currentTarget }) =>
        handleColorBoxClick(
          currentTarget.dataset.id,
          currentTarget.dataset.color
        )
      }
      onMouseEnter={({ currentTarget }) =>
        handleColorBoxHover(
          currentTarget.dataset.id,
          currentTarget.dataset.color
        )
      }
      onMouseLeave={handleColorBoxHoverOut}
      data-id={index}
      data-color={color}
    />
  );
};

const ColorList = ({
  hoveredColor,
  selectedColor,
  handleColorBoxClick,
  handleColorBoxHover,
  handleColorBoxHoverOut
}) => {
  return (
    <Div
      css={{
        height: '84%',
        maxWidth: '100%',
        overflowY: 'scroll',
        padding: '0em 3em',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
    >
      {colors.map((color, index) => (
        <Subscriber channel="profile" key={index}>
          {_ => (
            <ColorBox
              color={color}
              index={index}
              selectedColor={Number(selectedColor.id)}
              hoveredColor={Number(hoveredColor.id)}
              handleColorBoxClick={handleColorBoxClick}
              handleColorBoxHover={handleColorBoxHover}
              handleColorBoxHoverOut={handleColorBoxHoverOut}
            />
          )}
        </Subscriber>
      ))}
    </Div>
  );
};

export const ChatWallpaper = ({
  hoveredColor,
  selectedColor,
  handleProfileInfoBackClick,
  handleColorBoxClick,
  handleColorBoxHover,
  handleColorBoxHoverOut
}) => {
  return (
    <Div
      css={{
        height: '100vh',
        background: '#F7F7F7'
      }}
    >
      <Header
        title="Set Chat Wallpaper"
        handleProfileInfoBackClick={handleProfileInfoBackClick}
      />
      <ColorList
        hoveredColor={hoveredColor}
        selectedColor={selectedColor}
        handleColorBoxClick={handleColorBoxClick}
        handleColorBoxHover={handleColorBoxHover}
        handleColorBoxHoverOut={handleColorBoxHoverOut}
      />
    </Div>
  );
};
