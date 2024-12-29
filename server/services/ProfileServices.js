class ProfileServices{
    constructor(models){
        this.models = models
    }
    async changeAvatar(id,file){
        console.log(file)
        const user = await this.models.users.findByIdAndUpdate(id, {avatar : file.filename})
        return user
    }
}

module.exports = ProfileServices