
import * as ActionTypes from './ActionTypes';
const INITIAL_STATE = {
    showImageUpload: true,
    showUploading: false,
    showUploadFinised: false
  }
  //actions
  
  //reducer
  
  export const reducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
      case ActionTypes.IMAGE_SELECT:
        return {
          showImageUpload: true,
          showUploading: false,
          showUploadFinised: false
        };
      case ActionTypes.IMAGE_UPLOADING:
        return {
          showImageUpload: false,
          showUploading: true,
          showUploadFinised: false
        };
      case ActionTypes.IMAGE_UPLOADED:
        return {
          showImageUpload: false,
          showUploading: false,
          showUploadFinised: true
        };
      default:
        return INITIAL_STATE;
      
    }
  }