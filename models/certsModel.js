import { Schema, model, models } from 'mongoose';

const certSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    years: {
        type: Number,
        required: true
    }
});

const Cert = models.Cert || model('Cert', certSchema);

export default Cert;