import { auth } from "../../../firebase"

export const handleSignUp = ()=>{
    auth
    .createUserWithEmailAndPassword()
}