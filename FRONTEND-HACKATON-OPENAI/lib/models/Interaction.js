import { Schema, model, models } from 'mongoose'

const interactionSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: [true, 'User is required.'],
	},
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
}, {
	timestamps: true,
	versionKey: false
})

// Verificamos si el modelo ya fue definido previamente
export default models.Interaction || model('Interaction', interactionSchema)