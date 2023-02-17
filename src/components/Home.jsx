import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import ProductCard from './ProductCard';

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";

  const img2 =
"https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";


const Home = () => {
  const [data,setData]=useState([]);
  const productList=[{
    name: "Mac Book", 
    price: 10000,
    imgSrc: img1, 
    id: "13",
  },
  {
    name: "Hush Puppies", 
    price: 10000, 
    imgSrc: img2, 
    id: "07",
  },
]

useEffect(()=>{
  setData(productList);
},[]);

const addToCartHandler=(options)=>{
  console.log(options)
  toast.success("Added to Cart")
}

return (
  <div className="home">
    {
    data?.map(({imgSrc,name,price,id}) => (
      <ProductCard
        key={id}
        imgSrc={imgSrc}
        name={name}
        price={price}
        id={id}
        handler={addToCartHandler}
      />
    ))
    }
  </div>
);
};


export default Home;