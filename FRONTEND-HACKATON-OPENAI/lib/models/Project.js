import { Schema, model, models } from 'mongoose'

const projectSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name is required.'],
		unique: true,
		trim: true,
		maxlenght: [40, 'Title must be less than 40.']
	},
	description: {
		type: String,
		required: [false],
		trim: true,
		maxlenght: [200, 'Description must be less than 200 characters.']
	},
	isPublic: {
		type: Boolean,
		default: false
	},
	// userId: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'User',
	// 	required: [true, 'User is required.'],
	// }
}, {
	timestamps: true,
	versionKey: false
})

// Verificamos si el modelo ya fue definido previamente
export default models.Project || model('Project', projectSchema)