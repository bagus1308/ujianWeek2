import React, {Component} from 'react'
import PostRadio from '../ComRadio/PostRadio';
import PostCheck from '../ComCheckBox/PostCheck';
import PostArea from '../ComTeksArea/PostArea';
class PostSoal extends Component {
    render(){
        return(
            <div>
                <PostRadio />
                <PostCheck />
                <PostArea />
            </div>
        )
    }
}
export default PostSoal;