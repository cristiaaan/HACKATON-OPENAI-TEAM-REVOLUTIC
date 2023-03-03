import {dbConnect} from '@/lib/database/mongoose'
import Interaction from '@/lib/models/Interaction'
import Interaction from '@/lib/models/Project'

dbConnect()

export default async function handler(req, res){
	const { method, body, url, query } = req
	const { id } = res
	console.log(method, url)

	switch(method){
		case 'GET':
			try {
				const projects = await Project.find({ userId: { $ne: userId } });
        const projectIds = projects.map(project => project._id);
        const interactions = await Interaction.find({ projectId: { $in: projectIds } }).populate('userId');
        res.status(200).json(interactions);
			} catch (error) {
				return res.status(400).json({ message: error.message });
			}

		default:
			return res.status(400).json({message: "this method is not supported."})
	}

};