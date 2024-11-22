class CommentsControllers{
    async getFirstMessage(req,res){
        try {
            const comments = await req
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = CommentsControllers