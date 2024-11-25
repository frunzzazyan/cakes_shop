class ProductsControllers{
    async getProducts(req,res){
        try {
            const {page,sort,min,max} = req.query
            if(page){
                const products = await req.app.locals.services.products.getProducts(page, sort, min, max)
                res.json(products)
            }
            else{
                const products = await req.app.locals.services.products.getProducts()
                res.json(products)
            }
        } catch (error) {
            res.json(error)
        }
    }

    async getProductsCount(req,res){
        try {
            const productsCount = await req.app.locals.services.products.getProductsCount()
            res.send(productsCount)
        } catch (error) {
            res.json(error)
        }
    }
    
}

module.exports = ProductsControllers