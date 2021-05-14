import axios from 'axios'
import { IDeletMultiPhotos, IUpload } from '../@types/image';

axios.defaults = Object.assign(axios.defaults, {
    withCredentials: false,
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
  });

 
class API_Image {

  static uploadAPI:string = "/photos"
  static getAPI:string = "/photos/list"
  static deleteAPI:string = "/photos"
 
static async uploadPhoto({files, album}: IUpload) {

      const formData = new FormData();

      formData.append("album", album)

      try {

  //       for (let i = 0; i < files.length; i++) {

  //            let result  = await fetch(URL.createObjectURL(files[i]))

  //            let blob = await result.blob()
 
  //            formData.append('documents', blob)
             
  //       }

  //      let {data}  = await axios.put(this.uploadAPI, formData, {
  //           onUploadProgress: (ProgressEvent) => {
  //               let progress = Math.round(ProgressEvent.loaded / ProgressEvent.total * 100);
  //               return Number(progress);
  //           }
  //  })

  let data = {
    "message": "OK",
    "data": [
        {
            "album": "Personal",
            "name": "15.png",
            "path": "/albums/personal/15.png",
            "raw": "http://localhost:8888/photos/personal/15.png"
        },
        {
            "album": "Personal",
            "name": "14.png",
            "path": "/albums/personal/14.png",
            "raw": "http://localhost:8888/photos/personal/14.png"
        },
        {
            "album": "Personal",
            "name": "13.png",
            "path": "/albums/personal/13.png",
            "raw": "http://localhost:8888/photos/personal/13.png"
        },
        {
            "album": "Personal",
            "name": "12.png",
            "path": "/albums/personal/12.png",
            "raw": "http://localhost:8888/photos/personal/12.png"
        },
        {
            "album": "Personal",
            "name": "11.png",
            "path": "/albums/personal/11.png",
            "raw": "http://localhost:8888/photos/personal/11.png"
        },
        {
            "album": "Personal",
            "name": "10.png",
            "path": "/albums/personal/10.png",
            "raw": "http://localhost:8888/photos/personal/10.png"
        },
        {
            "album": "Personal",
            "name": "9.png",
            "path": "/albums/personal/9.png",
            "raw": "http://localhost:8888/photos/personal/9.png"
        },
        {
            "album": "Personal",
            "name": "8.png",
            "path": "/albums/personal/8.png",
            "raw": "http://localhost:8888/photos/personal/8.png"
        },
        {
            "album": "Personal",
            "name": "7.png",
            "path": "/albums/personal/7.png",
            "raw": "http://localhost:8888/photos/personal/7.png"
        },
        {
            "album": "Personal",
            "name": "6.png",
            "path": "/albums/personal/6.png",
            "raw": "http://localhost:8888/photos/personal/6.png"
        },
        {
            "album": "Personal",
            "name": "5.png",
            "path": "/albums/personal/5.png",
            "raw": "http://localhost:8888/photos/personal/5.png"
        },
        {
            "album": "Personal",
            "name": "4.png",
            "path": "/albums/personal/4.png",
            "raw": "http://localhost:8888/photos/personal/4.png"
        },
        {
            "album": "Personal",
            "name": "3.png",
            "path": "/albums/personal/3.png",
            "raw": "http://localhost:8888/photos/personal/3.png"
        },
        {
            "album": "Personal",
            "name": "2.png",
            "path": "/albums/personal/2.png",
            "raw": "http://localhost:8888/photos/personal/2.png"
        },
        {
            "album": "Personal",
            "name": "1.png",
            "path": "/albums/personal/1.png",
            "raw": "http://localhost:8888/photos/personal/1.png"
        }
    ]
}

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

        // let {data} = await axios.post(this.getAPI, {skip, limit});

        let data ={
            "message": "OK",
            "documents": [
                {
                    "id": "fef20926dc1b6ec6dd8f17acaa7a5ad9",
                    "album": "Nature",
                    "name": "road-1072823_1280.jpg",
                    "path": "/albums/Nature/road-1072823_1280.jpg",
                    "raw": "http://localhost:8888/photos/nature/road-1072823_1280.jpg"
                },
                {
                    "id": "f4d11f680804c766edbb1f83867b3f34",
                    "album": "Food",
                    "name": "food-1932466_1280.jpg",
                    "path": "/albums/Food/food-1932466_1280.jpg",
                    "raw": "http://localhost:8888/photos/food/food-1932466_1280.jpg"
                },
                {
                    "id": "e0f684f32e8252e5d0296998deb11c3b",
                    "album": "Travel",
                    "name": "japan-2014618_1280.jpg",
                    "path": "/albums/Travel/japan-2014618_1280.jpg",
                    "raw": "http://localhost:8888/photos/travel/japan-2014618_1280.jpg"
                },
                {
                    "id": "d1be8d58bd74ab9a5ce065b79a81f526",
                    "album": "Nature",
                    "name": "forest-3119826_1280.webp",
                    "path": "/albums/Nature/forest-3119826_1280.webp",
                    "raw": "http://localhost:8888/photos/nature/forest-3119826_1280.webp"
                },
                {
                    "id": "d087db08da2a8cb391a6106c817c465f",
                    "album": "Other",
                    "name": "taxi-cab-381233_1280.jpg",
                    "path": "/albums/Other/taxi-cab-381233_1280.jpg",
                    "raw": "http://localhost:8888/photos/other/taxi-cab-381233_1280.jpg"
                }
            ],
            "count": 50,
            "skip": 10,
            "limit": 5
        }

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

        //   let {data} = await axios.delete(this.deleteAPI, {data: photos}) 

          return {status: 'successful', message: 'data.message'}

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


  }





export default API_Image