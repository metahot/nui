import React from 'react';
import { IconProps } from './../interface';

export const IconInfo = ({ size = '1em', color = '#309EEB', className, ...rest }: IconProps) => (
  <svg
    className={`nuico ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 1024 1024"
    fill={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    <path d="m512.777956 2.844444c-281.628445 0-509.933512 228.305067-509.933512 509.933512 0 281.632711 228.305067 509.9392 509.933512 509.9392 281.632711 0 509.9392-228.305067 509.9392-509.9392 0-281.628445-228.306489-509.933512-509.9392-509.933512zm1.794844 164.327823c29.316267 0 53.172622 23.850667 53.172622 53.172622 0 29.316267-23.854933 53.166933-53.172622 53.166933s-53.166933-23.850667-53.166933-53.166933c0-29.321956 23.849244-53.172622 53.166933-53.172622zm54.333156 636.549689c0 29.960533-24.372622 54.333156-54.333156 54.333156s-54.334578-24.372622-54.334578-54.333156v-400.7552c0-29.960533 24.372622-54.333156 54.334578-54.333156s54.333156 24.372622 54.333156 54.333156zm0 0" />
  </svg>
);

export default IconInfo;