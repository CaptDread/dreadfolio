import { Schema, model, models } from 'mongoose';

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lvl: {
        type: Number,
    },
    type: {
        type: String,
    },
    effects: {
        type: Array,
    },
    stats: {
        type: Array,
    }
});

const Item = models.Item || model('Item', itemSchema);

export default Item;