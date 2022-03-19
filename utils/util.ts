import {NextRouter} from "next/router";

export function isNumeric(str: string): boolean {
    str = str.trim()
    if (str === "") return false
    if (startWithZero(str) && str.length > 1) return false
    const result = Number(str)
    return !isNaN(result) && !foundDot(str)

}

export function foundDot(str: string): boolean {
    return str.indexOf(".") > -1
}

export function startWithZero(str: string): boolean {
    return str.charAt(0) === '0'
}

export function sameLink(link : string , router : NextRouter){
    return link === router.pathname
}