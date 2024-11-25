class ProductsServices{
    constructor(models){
        this.models = models
    }
    async getProducts(page,sort,min,max){
        if(+min != 0 && +max != 0 && sort && page ){
            const start = `${page}0`-10
            const products = await this.models.products.find({price : {$gte : +min, $lte : +max}}).sort({price : +sort}).skip(start).limit(10)
            return products
        }
        else if(+min != 0 && +max != 0 && page){
            const start = `${page}0`-10
            const products = await this.models.products.find({price : {$gte : +min, $lte : +max}}).skip(start).limit(10)
            return products
        }
        else if(sort && page){
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