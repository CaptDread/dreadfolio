import { Schema, model, models } from 'mongoose';

const plyrSchema = new Schema({
    _id:{
        type: Schema.Types.ObjectId,
        unique: true
    },
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
    stats: {
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
    },
    g1Save: {
        type: String
    },
    g2Save: {
        type: String,
    }
});

const Player = models.Player || model('Player', plyrSchema);

export default Player;