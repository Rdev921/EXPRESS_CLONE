import React from 'react'

function Admin() {
    const [formState, setFormState] = useState({
        title: ' ',
        price: ' ',
        imageUrl: ''
    })
    
    const handleChange = (e)=>{
        const {name,type,value} = e.target;
        setFormState({
            ...formState,
            [name] : value
        });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        fetch(`http://localhost:8080/products`, {
            method:'post',
            headers: {
                'Content-Type' : 'application/json'
            },body:JSON.stringify(formState)
        })
        .then((res)=>res.json())
        .catch((error)=>console.log(error))
    }

    const{title,price,imageUrl} = formState;
    return (
        <div>
            <h3>Admin Page</h3>
            <label htmlFor="">Title: </label>
            <input type="text" 
            name="title" id="" 
            placeholder='Enter TItle' 
            value={title}
            onChange={handleChange}
            />

            <label htmlFor="">Price: </label>
            <input type="number"
             name="price" id=""
              placeholder='Enter Price'
              value={price}
            onChange={handleChange} />

            <label htmlFor="">ImageUrl: </label>
            <input type="text" 
            name="imageUrl" id="" 
            placeholder='Enter ImageUrl' 
            value={imageUrl}
            onChange={handleChange}
            />
            <input type="submit" value="CREATE PRODUCT" />
        </div>
    )
}

export default Admin    