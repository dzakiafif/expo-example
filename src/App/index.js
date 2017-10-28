import React, {Component} from 'react';

import {View , Text} from 'react-native';

import styles from './index.style';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Ini React Native</Text>
            </View>
        );
    }
}

export default App;