import {dbConnect} from '@/lib/database/mongoose'
import Project from '@/lib/models/Project'

dbConnect()

export default async function handler(req, res){
	const { method, body, url } = req
	const { id } = res
	console.log(method, url)

	switch(method){
		case 'GET':
			try {
				const projects = await Project.find()
				return res.status(200).json(projects)
			} catch (error) {
				return res.status(400).json({ message: error.message });
			}

		case 'POST':
			try {
				const project = await new Project(body).save()
				return res.status(201).json({message: "Project created.", data: project})
			} catch (error) {
				res.status(400).json({ message: error.message });
			}

		case 'PATCH':
			try {
				const updatedProject = await Project.findByIdAndUpdate(
          id,
          body,
          { new: true }
        );
        return res.status(200).json(updatedProject);
			} catch (error) {
				return res.status(400).json({ message: error.message });
			}
		case 'DELETE':
			try {
				await Project.findByIdAndDelete(id);
        return res.status(200).json({ message: 'User deleted.' })
			} catch (error) {
				return res.status(400).json({ message: error.message });
			}

		default:
			return res.status(400).json({message: "this method is not supported."})
	}

};