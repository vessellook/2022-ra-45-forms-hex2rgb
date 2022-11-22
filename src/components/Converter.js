import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { hex2rgb } from '../utils';

const propTypes = {
  defaultColor: PropTypes.string,
  defaultInput: PropTypes.string,
  defaultOutput: PropTypes.string,
};

const defaultProps = {
  defaultColor: '#ffffff',
  defaultInput: '#',
  defaultOutput: 'Введите цвет в HEX',
};

const Converter = ({defaultColor, defaultInput, defaultOutput}) => {
  const [output, setOutput] = useState(defaultOutput);
  const [color, setColor] = useState(defaultColor);
  const handleChange = ({ target: {value} }) => {
    if (value.length < 7) {
      return;
    }
    const rgb = hex2rgb(value);
    if (rgb == null) {
      setColor('red');
      setOutput('Ошибка!');
    } else {
      setColor(rgb);
      setOutput(rgb);
    }
  };

  return (
    <div className='converter' style={{ background: color }}>
      <input type='text' className="hex-input" maxLength={7} defaultValue={defaultInput} onChange={handleChange} />
      <div className="rgb-output">{output}</div>
    </div>
  );
};

Converter.propTypes = propTypes;
Converter.defaultProps = defaultProps;

export default Converter;
