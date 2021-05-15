import axios from 'axios'
import { IDeletMultiPhotos, IUpload } from '../@types/image';

axios.defaults = Object.assign(axios.defaults, {
    withCredentials: false,
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
  });
  
class API_Image {

  private static uploadAPI:string = "/photos"
  private static getAPI:string = "/photos/list"
  private static deleteAPI:string = "/photos"
 
static async uploadPhoto({files, album}: IUpload) {

      const formData = new FormData();

      formData.append("album", album);

      try {

        for (let i = 0; i < files.length; i++) {

             let result  = await fetch(URL.createObjectURL(files[i]))

             let blob = await result.blob()
 
             formData.append('documents', blob)
             
        }

       let {data}  = await axios.put(this.uploadAPI, formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(ProgressEvent.loaded / ProgressEvent.total * 100);
                return Number(progress);
            }
   })

  
      return {status: 'successful', message: data.message, data: data.data}

    } 
      
      catch (e) {
          console.error(e)
     
          try {
            console.error(e.response.data)
             return {message: e.response.data.message.length < 1 ? 'a technical error occured, pls retry' : e.response.data.message, status: 'failed'}
        } 
        
        catch (error) {

            console.error(error)
            
            return {message: 'a technical error occured, pls retry', status: 'failed'}

        }
            
        }
       }

static async getPhotos(skip:number, limit: number) {

    try {

        let {data} = await axios.post(this.getAPI, {skip, limit});
 

        let query = {
            count:data.count, 
            skip: data.skip, 
            limit: data.limit
        }

        return {status: 'successful', message: data.message, data: data.documents, query}


    } 
    catch (e) {
        console.error(e)
   
        try {
          console.error(e.response.data)
           return {message: e.response.data.message.length < 1 ? 'a technical error occured, pls retry' : e.response.data.message, status: 'failed'}
      } 
      
      catch (error) {

          console.error(error)
          
          return {message: 'a technical error occured, pls retry', status: 'failed'}

      }
          
      }
}

static async deleteSinglePhoto({album, FileName}:IDeletMultiPhotos){
        
       try {
           
          let {data} = await axios.delete(`${this.deleteAPI}/${album}/${FileName}`) 

          return {status: 'successful', message: data.message}

        } 
        catch (e) {
            console.error(e)
       
            try {
              console.error(e.response.data)
               return {message: e.response.data.message.length < 1 ? 'a technical error occured, pls retry' : e.response.data.message, status: 'failed'}
          } 
          
          catch (error) {
    
              console.error(error)
              
              return {message: 'a technical error occured, pls retry', status: 'failed'}
    
          }
              
          }
}

static async deleteMultiPhoto(photos: IDeletMultiPhotos[]){
        
       try {

          let {data} = await axios.delete(this.deleteAPI, {data: photos}) 

          return {status: 'successful', message: data.message}

        } 

        catch (e) {

            
            try {

                return {message: e.response.data.message.length < 1 ? 'a technical error occured, pls retry' : e.response.data.message, status: 'failed'}
          } 
          
          catch (error) {
    
              console.error(error)
              
              return {message: 'a technical error occured, pls retry', status: 'failed'}
    
          }
              
          }
}


  }





export default API_Image