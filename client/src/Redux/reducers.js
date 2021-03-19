
import * as ActionTypes from './ActionTypes';
const INITIAL_STATE = {
    showImageUpload: true,
    showUploading: false,
    showUploadFinised: false,
    imgUrl: ''
  }
  //actions
  
  //reducer
  
  export const reducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
      case ActionTypes.IMAGE_SELECT:
        return {
          ...state,
          showImageUpload: true,
          showUploading: false,
          showUploadFinised: false
        };
      case ActionTypes.IMAGE_UPLOADING:
        return {
          ...state,
          showImageUpload: false,
          showUploading: true,
          showUploadFinised: false,
          
        };
      case ActionTypes.IMAGE_UPLOADED:
        return {
          ...state,
          showImageUpload: false,
          showUploading: false,
          showUploadFinised: true,
          imgUrl: action.payload.imgUrl
        };
      default:
        return INITIAL_STATE;
      
    }
  }