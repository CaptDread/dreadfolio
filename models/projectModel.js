import { Schema, model, models } from 'mongoose';

const ProjSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
    },
    logo: {
        type: String,
    },
    link: {
        type: String,
    },
    skills: {
        type: String,
    }
});

const Project = models.Project || model('Project', ProjSchema);

export default Project;