import React, {Component} from 'react'
import CompoCheck from './Com_Check.json';
class PostCheck extends Component {


    render(){
        return(
            <div>
                {CompoCheck.map((CompoDetail, index)=>{
                   return<form>
                       <p>2. {CompoDetail.soal}</p>
                            <input type='checkbox' name='Check' checked/>{CompoDetail.option="Trainer Juara Coding"}
                            <br />
                            <input type='checkbox' name='Check' checked/>{CompoDetail.option="Manusia"}
                            <br />
                            <input type='checkbox' name='check'/>{CompoDetail.option="Anggota Avenger"}
                        </form>
               })}
            </div>
        )
    }
}
export default PostCheck;