import * as ImagePicker from 'expo-image-picker';

export const chooseImg = async (images:[], setImages: ([]) => void) => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [4, 3],
        quality: 1,			
        allowsEditing: true,
    });


    if (!result.cancelled) {
       setImages([...images, {...result, place: {}}]);
    }
};