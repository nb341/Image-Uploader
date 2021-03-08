import * as ActionTypes from './ActionTypes';
export const selectAction = ()=>{
    return {
      type: ActionTypes.IMAGE_SELECT
    }
    
  }
  
export const uploadingAction = ()=>{
    return {
      type: ActionTypes.IMAGE_UPLOADING
    }
  }
  
export const uploadedAction = ()=>{
    return {
      type: ActionTypes.IMAGE_UPLOADED
    }
  }