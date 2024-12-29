class ProfileController{ 
    async changeAvatar(req,res){
        try {
            const {body, file} = req
            const {id} = req.params
            const user = await req.app.locals.services.profile.changeAvatar(id,file)
            res.json(user)
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = ProfileController