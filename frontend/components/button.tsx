import React from 'react';
import '../Styles/button.css'; // We'll add styling here

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', style }) => {
  return (
    <button className="custom-button" onClick={onClick} type={type} style={style}>
      {label}
    </button>
  );
};

export default Button;
