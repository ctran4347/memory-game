import {React} from "react";
import GithubLogo from "../assets/github-icon.svg";
export default function Footer (){
    return (<footer>
        Copyright 2021 © ctran4347
        <a href="https://github.com/ctran4347" target="_blank" rel="norefererr"><img className="github-logo" src={GithubLogo}/></a>
    </footer>)
}