import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getResizeImage } from "./getResizeImage";

export const uploadImage = async (image:any, make:string, model:string, userUid:string, setUrl:(uri:string, image:any)=>void) => {
    const storage = getStorage();
    const resizeImage = await getResizeImage(image.uri)
    const response = await fetch(resizeImage.uri)
    const blob = await response.blob()
    let  downloadURL:string

    const immageFullName = image.uri.split('/')[image.uri.split('/').length-1]
    const storageRef = ref(storage, `${userUid}/${make}-${model}/${immageFullName}`);

    try {
        uploadBytes(storageRef, blob).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setUrl(url, image)
            });
        })
    } catch (error) {
        console.log(error)
    }
   
}