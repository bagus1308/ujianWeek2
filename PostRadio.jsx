import React, {Component} from 'react'
import CompoRadio from './Com_Radio.json';
class PostRadio extends Component {
    render(){
        return(
            <div>
               {CompoRadio.map((RadioDetail, index)=>{
                   return<form>
                       <p>1. {RadioDetail.soal}</p>
                            <input type={RadioDetail.type} name='radio' checked/>{RadioDetail.a}
                            <input type={RadioDetail.type} name='radio'/>{RadioDetail.c}
                            <br />
                            <input type={RadioDetail.type} name='radio'/>{RadioDetail.b}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type={RadioDetail.type} name='radio'/>{RadioDetail.d}
                        </form>
               })}
            </div>
        )
    }
}
export default PostRadio;