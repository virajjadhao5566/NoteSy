"use client"
import {Form, useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { userValidation } from '@/lib/validations/user';
interface Props{
    user:{
        id:string,
        objectId:string,
        username:string,
        name:string,
        bio:string,
        image:string
    };
    btnTitle:string
}

const AccountProfile = ({user,btnTitle} : Props) =>{
    const form = useForm({
        resolver:zodResolver(userValidation)
    })
    return(
        <Form>

        </Form>
    )
}
export default AccountProfile