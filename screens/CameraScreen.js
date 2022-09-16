import { Text, View,StyleSheet, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import React, { useEffect ,useState  } from 'react';

export default function MyCamera() {
    let n =null
    const [hasPermission, setHasPermission] = useState(n);
    let d =Camera.Constants.Type.back
    const [type, setType] = useState(d);
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            let z =(status === 'granted')
            setHasPermission(z);
        })();
    }, []);

    let x=hasPermission === null
    let y=hasPermission === false
    if (x) {
        return <View />;
    }
    if (y) {
        return <Text>Camera permission is not there</Text>;
    }

    return (
        <View style={[cameraStyle.mainView]}>
            <Camera style={[cameraStyle.childView]} type={type}>
                <View style={[cameraStyle.deepView]}>
                    <TouchableOpacity
                        style={[cameraStyle.touchStyle]}
                        onPress={() => {
                        setType(
                        type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                        );
                    }}>
                        <Text style={[cameraStyle.textStyle]}> Rotate Camera </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const cameraStyle = StyleSheet.create({
    mainView: {
    flex: 1,
    },
    childView: {
    flex: 1,
    },
    textStyle: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white'
    },
    deepView: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    },
    touchStyle: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    }})