import { atom } from "recoil";

const savecartorder = JSON.parse(localStorage.getItem('savecartorder'));


export const $Saveddataeluser = atom({
    key: "Saveddataeluser",
    default: savecartorder
});