import { AlertProps, Car, Error, HistoryCar, Image } from "../../utils/types";
import { doc, setDoc, collection, addDoc } from 'firebase/firestore';
import { FirebaseApp } from "firebase/app";
import { documentId } from "firebase/firestore";
import { db } from "../../hooks/useAuth";


export const uploadDataCar = async (
    project_id:string,
    carData:any, 
    stages:HistoryCar[],
    firebaseImagesUri: Image[],
    userUid:string, 
    language:string,  
) => {
    console.log(firebaseImagesUri, 'ddd')
        if(firebaseImagesUri.length>0){
            const finishCarData:Car = {
            CarMake:carData.make,
            model:carData.model,
            likes:0,
            description:carData.description,
            performance: [
                {type:'hp', value:carData.power},
                {type:'nm', value: carData.torque},
                {type: '_0_100', value:carData._0_100},
                {type: '_100_200', value:carData._100_200}
            ],
            history:stages,
            imagesCar: firebaseImagesUri,
        } 
        console.log(finishCarData)
        const errorMessage = language==='pl'
        ?'Coś poszło nie tak, spróbuj później'
        :'Something went wrong, please try again later' 

        const successMessage = language==='pl'
        ?'Projekt został dodany'
        :'Project was added' 
        
        const uploadDataCar = new Promise<AlertProps>(async (resolve, reject) => {
            await setDoc(doc(db, `users/${userUid}/projects`, project_id), finishCarData)
            .then(s=> {
                return resolve({type:'SUCCESS', show:true, message: successMessage})
            })
            .catch(e=> {
                return reject({type:'ERROR', show:true, message: errorMessage})
            })
        });

        return uploadDataCar
    }
}