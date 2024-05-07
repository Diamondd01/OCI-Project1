import React , {useState,useEffect} from 'react';

function Category({onSelect}) {
    const [categories, setCategories]= useState([]);
    const [selectedCategory, setSelectedCategory]= useState('');

    useEffect(() => {
        fetch('/categories')
        .then(response => response.json())
        .then(data => setCategories(data.categoryNames))
        .catch(error => console.error('Error fetching actegories',error));
        
    },[])

    const handleChange = event =>{
        setSelectedCategory(event.target.value);
    };

    const handleSubmit = event =>{
        event.preventDeafult();
        if(selectedCategory){
            onSelect(selectedCategory);
        }
    };
}
return (
    <div>
        <h2>Choose a Category:</h2>
        <form onSubmit={{handleSubmit}}>
            <select value ={selectedCategory} onChange={handleChange}>
                <option value=""> Select a Category</option>
                {categories.map(category => (
                    <option key={category} value ={category}>{category}</option>
                ))}
            </select>
            <button type='submit'>Get Random Recipe</button>
        </form>
    </div>
)

export default Category;
