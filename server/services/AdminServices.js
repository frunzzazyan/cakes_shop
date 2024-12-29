class AdminServices{
    constructor(models){
        this.models = models
    }
    async getProductsCount(){
        const count = await this.models.products.aggregate([
            {$match : {}}
        ])
        return {productsCount : count.length}
    }
    async getUsersCount(){
        const count = await this.models.users.aggregate([
            {$match : {}}
        ])
        return {usersCount : count.length}
    }

    async deleteProduct(id){
        const delProd = await this.models.products.findByIdAndDelete(id)
        return delProd
    }
    async deleteUser(id){
        const delUser = await this.models.products.findByIdAndDelete(id)
        return delUser
    }
}

module.exports = AdminServices