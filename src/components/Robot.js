import React, { Component  } from 'react';
import { Image  } from 'react-native';

class Robot  extends Component {
    render() {
        return (
            <Image source={{ uri: 'https://via.placeholder.com/300/300'  }}
              style={{ width: 200, height: 200  }}
            />
        )
    }
}

export default Robot;
