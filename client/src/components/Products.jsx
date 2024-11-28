import {useReducer,useEffect, useState} from 'react'
import Header from './Header'

import "./styles/Products.css"


function reducer(state, {payload}){
    state = payload
    return state
  }
  

const Products = () => {
    const [products, dispatch] = useReducer(reducer, [])
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(11)
    const [sort, setSort] = useState("")
    const [inputMin,setInputMin] = useState("")
    const [inputMax,setInputMax] = useState("")



    useEffect(()=>{
      fetch("http://localhost:3000?sort=&page=1&min=&max=")
      .then(res=>res.json())
      .then(res=>dispatch({type : "GET_PRODUCTS", payload : res}))

      fetch("http://localhost:3000/count")
      .then(res=>res.json())
      .then(res=>setPageCount(res.length/10))
      
    },[])


    function handlePageIdx(idx){
        fetch(`http://localhost:3000?sort=${sort}&page=${idx}&min=${inputMin}&max=${inputMax}`)
        .then(res=>res.json())
        .then(res=>dispatch({type : "GET_PRODUCTS", payload : res}))
    }

    function handlePage(type){
      switch (type){
        case "previous":
          if(page<12)return
          setPage(page-1)
          fetch(`http://localhost:3000?sort=${sort}&page=${page}&min=${inputMin}&max=${inputMax}`)
          .then(res=>res.json())
          .then(res=>dispatch({type : "GET_PRODUCTS", payload : res}))
          break
        case "next":
          setPage(page+1)
          fetch(`http://localhost:3000?sort=${sort}&page=${page}&min=${inputMin}&max=${inputMax}`)
          .then(res=>res.json())
          .then(res=>dispatch({type : "GET_PRODUCTS", payload : res}))
          break
      }
    }

    function handleSort(type){
      setSort(type)
          fetch(`http://localhost:3000?sort=${type}&page=1&min=${inputMin}&max=${inputMax}`)
        .then(res=>res.json())
        .then(res=>dispatch({type : "GET_PRODUCTS_SORT", payload : res}))
    }
    
    function handlePriceSearch(){
      console.log(inputMin)
      console.log(inputMax)

      fetch(`http://localhost:3000?sort=${sort}&page=1&min=${inputMin}&max=${inputMax}`)
        .then(res=>res.json())
        .then(res=>dispatch({type : "GET_PRODUCTS_SORT", payload : res}))
    }

  return (
    <>
        <Header/>
        <div className="products">
        <div className="products-pagination">
            <div className="products">
              {(products.length >= 1 ? products.map(elem=>{
                    return <div key={elem._id} className="item">
                      <div className="image">
                        <img src="" alt="" />
                      </div>
                        <h2>{elem.name}</h2>
                        <p>{elem.description}</p>  
                        <span>price_{elem.price}$</span> 
                    </div>
                }) : <h1>datark</h1>)}
                
            </div>
            <div className="pagination">
              <button onClick={()=>handlePage("previous")}>{"<<"+(page-1)}</button>
                {
                 Array(pageCount).fill(null).map((_,idx)=>{
                  if(idx+1>10)return
                  return <button onClick={()=>handlePageIdx(idx+1)} key={idx}>{idx+1}</button>
                 })
                }
                <button onClick={()=>handlePage("next")}>{">>"+page}</button>
            </div>
        </div>
        <div className="fillter-products">
          <div className="search">
                  <input type="text" placeholder='Search Name'/>
                  <button>Search</button>
          </div>
          <div className="price">
            <h5>Price</h5>
            <div className="inputs">
            <input onChange={(e)=> setInputMin(e.target.value) } type="number" value={inputMin} name='min' placeholder='Min'/>
            <input onChange={(e)=> setInputMax(e.target.value) } type="number" value={inputMax} name='max' placeholder='Max'/>
            </div>
            <button onClick={()=>handlePriceSearch()}>Search</button>
          </div>
          <div className="sort">
            <button onClick={()=>handleSort(1)}>min-max</button>
            <button onClick={()=>handleSort(-1)}>max-min</button>
          </div>
          <select name="" id="">
            <option value="shokolad">shokolad</option>
            <option value="vanil">vanil</option>
          </select>
        </div>
        </div>
    </>
  )
}

export default Products