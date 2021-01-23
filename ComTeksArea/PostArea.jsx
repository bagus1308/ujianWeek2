import React, {Component} from 'react'
import CompoArea from './Com_Area.json';

class PostArea extends Component {
    render(){
        return(
            <div>
               {CompoArea.map((AreaDetail, index)=>{
                   return<form>
                       <p>3. {AreaDetail.soal}</p>
                            &nbsp;&nbsp;&nbsp;<textarea name="" id="" cols="30" rows="5" value={AreaDetail.type}></textarea>
                        </form>
               })}
            </div>
        )
    }
}
export default PostArea;