import { Schema, model, models } from 'mongoose';

const SkillSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    years: {
        type: String,
    },
    logo: {
        type: String,
    },
    link: {
        type: String,
    }
});

const Skill = models.Skill || model('Skill', SkillSchema);

export default Skill;