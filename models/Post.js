import { Mongoose } from "mongoose";

const PostSchema = new Mongoose.Schema({
    user: {
        type: 'ObjectId',
        ref: 'User'
    },
    title: {
        type: String, 
        required: true
    }, 
    body: {
        type: String, 
        required: true
    }, 
    date: {
        type: Date,
        default: Date.now
    }
})

const POst = mongoose.model('post', PostSchema);

export default Post;
