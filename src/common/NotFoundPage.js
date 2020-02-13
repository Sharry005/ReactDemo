import React from 'react';
import history from './history';
import styled from 'styled-components';
import notfond from '../image/notfond.png';
// 404页面样式
const Notfond = styled.div `
    width:100%;
    height:100%;
    background:#ECEFF1;
    position:fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    display: flex;
    flex-flow: row nowrap;
    justify-content:  center;
    align-items: center;
    .back {
        position:absolute
        display:block;
        width:100px;
        margin:0 auto;
        height:32px;
        text-align:center;
        line-height:30px;
        background:var(--themecolor);
        border-radius:5px;
        color: var(--whitecolor);
        font-size:var(--middlesize);
        letter-spacing:2px;
        margin-top:10%;
        cursor:pointer
    }
`;
export default function NotFoundPage(props){
    const handleClick=()=>{
        history.goBack();
    }
    return (
        <Notfond>
            <img src={notfond} alt="not" />
            <button className="back" title="返回" onClick={() => handleClick()}>
                返回
            </button>
        </Notfond>
    )
}