import React from 'react';
import "../../index.scss";
import './Title.scss';

const Title = ({ text, level }) => {

  return (
    <h1 className={level}>
      {/* Styles the last character of the string passed through the "text" prop as yellow. */}
      {text.split('').map((char, index) => (
        <span key={index} style={{ color: index === text.length - 1 ? '#FDEE00' : 'inherit' }}>
          {char}
        </span>
      ))}
    </h1>
  );
}

export default Title;
