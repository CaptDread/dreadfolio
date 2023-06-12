import { Schema, model, models } from 'mongoose';

const JobSchema = new Schema({
    employer: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: false,
        default: "Currently Employeed"
    }
});

const Job = models.Job || model('Job', JobSchema);

export default Job;