class ProductsServices{
    constructor(models){
        this.models = models
    }
    async getProducts(page,sort){
        console.log(page,+sort)
        if(sort && page){
            const start = `${page}0`-10
            const products = await this.models.products.find().sort({price : +sort}).skip(start).limit(10)
            return products
        }
        else if(page){
            const start = `${page}0`-10
            const products = await this.models.products.find().skip(start).limit(10)
            return products
        }
        else{
            const products = await this.models.products.find().limit(10)
            return products
        }
    }
    async getProductsCount(){
            const productsCount = await this.models.products.find()
            return productsCount
    }
}

module.exports = ProductsServices