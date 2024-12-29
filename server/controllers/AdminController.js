class AdminController{
    async getProductsCount(req,res){
        try {
            const count = await req.app.locals.services.admin.getProductsCount() 
            res.json(count)
        } catch (error) {
            res.json(error)
        }
    }
    async getUsersCount(req,res){
        try {
            const count = await req.app.locals.services.admin.getUsersCount() 
            res.json(count)
        } catch (error) {
            res.json(error)
        }
    }
    
    async deleteProduct(req,res){
        try {
            const product = await req.app.locals.services.admin.deleteProduct(req.params.id)
            res.json(product)
        } catch (error) {
            res.json(error)
        }
    }
    async deleteUser(req,res){
        try {
            const user = await req.app.locals.services.admin.deleteUser(req.params.id)
            res.json(user)
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = AdminController