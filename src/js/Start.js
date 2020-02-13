import React, { Component } from "react";
import Star from '../images/star.png';
import StarGray from '../images/star-gray.png';
import _ from 'lodash';

class Start extends Component {
    render() {
        let main=(level)=>{
            let arr=[];
            for(let s=1;s<=5;s++){
                // if(s<=level){
                //     arr.push(<span><img src={Star} alt=""/></span>)
                // }else{
                //     arr.push(<span><img src={StarGray} alt=""/></span>)
                // }
                s<=level ? arr.push(<span key={s}><img src={Star} alt=""/></span>) : arr.push(<span key={s}><img src={StarGray} alt=""/></span>)
            }
            return arr;
        }
        return (
            <div>
                {main(3)}
            </div>
        )
    }
}
export default Start;