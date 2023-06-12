import { Schema, model, models } from 'mongoose';

const EduSchema = new Schema({
    school: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    link: {
        type: String,
    },
    field: {
        type: String,
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: false,
        default: "Currently Enrolled"
    }
});

const Education = models.Education || model('Education', EduSchema);

export default Education;