import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const userSchema = new mongoose.Schema({
    profile: {
             type: String,
             minlength: [5, 'minimum profile is 5'], 
             maxlength: [16, 'maximum profile is 16'],
             unique: true,
             required: [true, 'please enter profile details'],
             lowercase: true},

    email: {
           type: String,
           unique: true,
           required: [true, 'the email field is required'],
           lowercase: true},

    password: {
               type: String,
               minlength: 8,
               required: [true, 'you must enter a password']
            },
  
})

userSchema.set('toJSON', {
    transfrom: (doc, user) => {
        user.id = user._id.toString()
        delete user._id
        delete user.__v
        delete user.password
    }
})


userSchema.pre('save', function(){
    if(this.password !== null || undefined ){
        bcrypt.hash(this.password, 'secret-text', function(err, hash){
            this.password = hash
        })
    }
    next()
})
const User = mongoose.model('user', userSchema)

export default User