
import React, {Component} from 'react';
import ImageUploader from './ImageUploader';
import Uploading from './Uploading';
import UploadFinised from './UploadFinished';
import { connect } from 'react-redux';
import { selectAction, uploadingAction, uploadedAction } from '../Redux/ActionCreators';

const mapStateToProps = state => {
  return {
    showImageUpload: state.showImageUpload,
    showUploading: state.showUploading,
    showUploadFinised: state.showUploadFinised
  }
}
const mapDispatchToProps = dispatch => ({
  selectAction: () => { dispatch(selectAction())},
  uploadingAction: ()=> {dispatch(uploadingAction())},
  uploadedAction: ()=> {dispatch(uploadedAction())}
 
});

class Main extends Component {

//  state = { 
//    showImageUpload: true,
//    showUploading: false,
//    showUploadFinised: false
//  }

//  updateHandler(state){
//     this.setState(
//       {
//        showImageUpload: state.showImageUpload,
//        showUploading: state.showUploading,
//        showUploadFinised: state.showUploadFinised
//       }
//     )
//  }





 render(){
   return(
     <div>
     {this.props.showImageUpload && <ImageUploader selectView = {this.props.selectAction} uploadView = {this.props.uploadingAction} uploadedView ={this.props.uploadedAction}/>}
     {this.props.showUploading && <Uploading uploadedView ={this.props.uploadedAction}/>}
     {this.props.showUploadFinised && <UploadFinised selectView = {this.props.selectAction}/>}
     </div>
   )
 }

}

export default connect(mapStateToProps, mapDispatchToProps)(Main);