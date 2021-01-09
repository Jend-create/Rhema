import express from 'express';
import mongoose from 'mongoose';
import User from '../models/userModel.js';

function handleError(error){
    let err = { profile: '', email: '', password: ''}

    if(error.message === 'incorrect profile details'){
        err.profile = 'this user profile does not exist'
    }

    if(error.message === 'incorrect email'){
        err.email = 'that email is not valid'
    }

    if(error.message === 'incorrect password'){
        err.password = 'that password is incorrect'
    }

    if(error.code === 11000){
        err.email = 'that email is registered already'

        return err
    }
    
    if(error.message.includes('user validation failed')){

        Object.values(error.errors).forEach(({ properties }) => {
            err[properties.path] = properties.message
        })
    }

    return err
}
const Router = express.Router()

export const userCtrl = {}
// create a user = POST method
 export const createUser = async (req, res)=> {

    try{
        const newUser = new User(req.body)
        let result = await newUser.save()
        res.status(200).send({message: 'Your account has been created successfully', result})
            
        }
        catch (error){
            console.log(error.message)
            const warnings = handleError(error)
            res.status(400).json({warnings})

    }
}

// read a user detail = GET method
export const getUserDetails = async (req, res) => {
    try{
        let person = await User.find({ profile: req.body.profile })
        if (!person){
             res.status(400).send({ message: 'user profile notfound'})
    } 

        else {
            res.status(200).send({ message: 'user profile found', person})

        }
    }
    catch ( error ) {
        const warnings = handleError(error)
        res.status(400).json({warnings})

           }

        }

// update a user detail = UPDATE/PUT method
export const updateUserDetails = async (req, res) => {
    try{
const { profile, email, password } = req.body

        let person = await User.findOneAndUpdate({_id: req.params.id }, {profile, email, password})
        res.status(200).send({message: 'Your account has been updated successfully', person})
    }
    catch ( error ) {
        const warnings = handleError(error)
        res.status(400).json({warnings})
    }
}

// delete a user detail = DELETE method
export const deleteUserDetails = async (req, res) => {
    try{
const { profile, email } = req.body

       await User.findOneAndDelete({_id: req.params.id }, {profile, email })
       res.status(200).send({message: 'Your account has been deleted successfully'})
       //Here you don't have to add ,person details again because the account has been deleted 
                    
    }
    catch ( error ) {
        console.log(error)
    }
}

export default userCtrl