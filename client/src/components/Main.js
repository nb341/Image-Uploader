
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
    showUploadFinised: state.showUploadFinised,
    imgUrl: state.imgUrl
  }
}
const mapDispatchToProps = dispatch => ({
  selectAction: () => { dispatch(selectAction())},
  uploadingAction: ()=> {dispatch(uploadingAction())},
  uploadedAction: (imgUrl)=> {dispatch(uploadedAction(imgUrl))}
 
});

class Main extends Component {





 render(){
   return(
     <div>
     {this.props.showImageUpload && <ImageUploader selectView = {this.props.selectAction} uploadView = {this.props.uploadingAction} uploadedView ={this.props.uploadedAction}/>}
     {this.props.showUploading && <Uploading uploadedView ={this.props.uploadedAction}/>}
     {this.props.showUploadFinised && <UploadFinised imgUrl={this.props.imgUrl} selectView = {this.props.selectAction}/>}
     <p id="creator">created by <a href="https://github.com/nb341" target="_blank" rel="noreferrer" id="username">nb341</a> - devChallenges.io</p>
     </div>
   )
 }

}

export default connect(mapStateToProps, mapDispatchToProps)(Main);