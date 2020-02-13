import React, { useEffect } from 'react';
import { Router, Route, Redirect, Switch} from 'react-router-dom';
import App from './App';
import NotFoundPage from './common/NotFoundPage';
import history from './common/history';
export default function Start() {
    useEffect(() => {
        document.title = "练习项目"
    },[])
    // const setProperty=()=>{
    //     document.documentElement.style.setProperty(val.css, val.js);
    // };
    // 换肤
    /**
     * 全局用法
     * 更改全局
     * 
     * 上面引入 import { useDispatch } from 'redux-react-hook';
     * 
     * const dispatch = useDispatch();
     * dispatch({
            type: "INIT_USER",
            userinfo: data
        })
     * 使用全局
        上面引入 import { useMappedState } from 'redux-react-hook';
        使用
        const mapstate = useCallback((state) => state.userinfo, []);
        const userinfo = useMappedState(mapstate);
     */
    return (
        <Router history={history}>
            <Switch>
                    <Route path="/" component={(match) => {
                        return <App match={match} />
                    }} />
                    <Route path='/404' component={NotFoundPage} />
                    <Redirect from='*' to='/404' />
            </Switch>
        </Router>
    )
}