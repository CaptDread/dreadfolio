import { Schema, model, models } from 'mongoose';

const mobSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lvl: {
        type: Number,
    },
    weapon: {
        type: String,
    },
    armor: {
        type: String,
    },
    inv: {
        type: Array,
    },
    type: {
        type: String
    },
    stats:{
        type: Array,
        str: {
            type: Number
        },
        dex: {
            type: Number
        },
        con: {
            type: Number
        },
        int: {
            type: Number
        },
        wis: {
            type: Number
        },
        cha: {
            type: Number
        },
        hp: {
            type: Number
        },
        ac: {
            type: Number
        }
    }
});

const Enemy = models.Enemy || model('Enemy', mobSchema);

export default Enemy;