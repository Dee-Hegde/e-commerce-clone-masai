import React from 'react'
import styles from "./Navbar.module.css"
import searchlogo from "./navimages/search-interface-symbol.png";
import { useHistory } from "react-router-dom"

function NavSearch() {
    let history = useHistory();
    const url="result?"
    const [words, setWords]=React.useState("")
    const handleClick=()=>{
        const param= new URLSearchParams(`${url}category=${words}`)
        history.push(`${param}`)
    }
    return (
        <div className={styles.navserach}>
            <button>
                <img onClick={()=>handleClick(words)} className={styles.navsearchlogo} src={searchlogo} alt="image" />
                <input onChange={(e)=>setWords(e.target.value)} value={words} placeholder="search for products, brands and more" type="text" />
            </button>
        </div>
    )
}

export default NavSearch
