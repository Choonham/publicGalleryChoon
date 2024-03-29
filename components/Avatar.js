import React from 'react';
import {Image} from 'react-native';

const Avatar = ({source, size, style}) => {
  return (
    <Image
      source={source || ''}
      resizeMode="cover"
      style={[
        style,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    />
  );
};

Avatar.defaultProps = {
  size: 32,
};

export default Avatar;
