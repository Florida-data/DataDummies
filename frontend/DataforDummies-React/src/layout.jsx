import { Children, useEffect } from "react";
import { Asidebar } from "./Asidebar";
import {connect} from 'react-redux';
import {checkAuthenticated, load_user} from '../actions/auth';

const Layout =({props})=> {
    useEffect(()=>{
        props.checkAuthenticated()
        props.load_user()
    }, [])
    return(
        <section>
            <AsideBar>
                {props.Children}
            </AsideBar>
        </section>
    )
}
export default connect(null, {checkAuthenticated, load_user} )(Layout)