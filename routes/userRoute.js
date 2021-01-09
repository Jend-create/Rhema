import express from 'express';
import { 
    createUser,
    getUserDetails,
    updateUserDetails,
    deleteUserDetails
} from '../controllers/userController.js'

const Router = express.Router()

//The Route for creating an account
Router.post('/api/user/new', createUser)

//route for getting an account details
Router.get('/api/user/profile', getUserDetails)

//route for updating an account details
Router.put('/api/user/update', updateUserDetails)

//route for deleting an account
Router.delete('api/user/delete', deleteUserDetails)

export default Router;