import { clearImmediate } from "core-js";

function getRandomInt(min,max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
 }

export function shuffle(arr) { 
    let _arr = arr.slice() 
    for(let i = 0; i < _arr.length; i++){
        let j = getRandomInt(0,i)
        let r = _arr[i]
        _arr[i] = _arr[j]
        _arr[j] = r
    }
    return _arr
}

export function debaounce(func, delay) { 
    let timer
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() =>{
            func.apply(this, args)
        }, delay)
    }
 }