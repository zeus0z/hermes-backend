import { Injectable } from "@nestjs/common";
import { auth } from "src/config/firebase";
import {
    createUserWithEmailAndPassword
    , signInWithEmailAndPassword
} from "firebase/auth";
import e from "express";

@Injectable()
export class User {

    async createUser(email:string, password:string):Promise<any> {
        try{
            const userCredentials = await   createUserWithEmailAndPassword(auth,password,email)
            return userCredentials
        } catch (e) {
            throw e
        }
    }

    async signInWithEmail (password:string,email:string):Promise<any>{
        try{
            const userCredentials = await   signInWithEmailAndPassword(auth,password,email)
            return userCredentials
        } catch (e) {
            throw e
        }
    }

    async signOff () {

    }

 

    


}
