// laodCategories 
const laodCategories =  async()  => {
    try{
        const res  = await fetch ('https://openapi.programming-hero.com/api/news/categories')
    const data = await res.json();
    // console.log(data.data.news_category)
    return data.data.news_category;
    }catch(error){
        console.log(error)
    }
}



// ------------- show all the categories in UI  -------------------
const setAllCategory = async () =>{
  const categories =   await laodCategories()
//   console.log(categories)

    const categoriesContainer = document.getElementById('categories-container');
    categoriesContainer.textContent = ''
  categories.forEach((singleCategory)=> {
    // console.log(singleCategory)
    // const {category_id, category_name} = singleCategory;
    // console.log(category_id,category_name)

    const menu = document.createElement('a')
    menu.innerHTML = `
    
    <div class="p-2 cursor-pointer"  href="" onclick="loadCategoriesNumber('${singleCategory.category_id}', '${singleCategory.category_name}')">${singleCategory.category_name}</div>
    `
    categoriesContainer.appendChild(menu)

    

  })
}
setAllCategory()


// -------------- how many items available  ------
const loadCategoriesNumber = async(id, name) =>{
    // now its time to fetch (https://openapi.programming-hero.com/api/news/category/01 this ) catagory  item
    const url = (`https://openapi.programming-hero.com/api/news/category/${id}`)
    try{
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data.data.length, name)
        return numberOfAvailableNews(data.data, name)

    }catch (error){
        console.log(error)
    }

}


// how many items are availabile on particular news 

const numberOfAvailableNews = (number, name) =>{
    const numberOfNewsContainer = document.getElementById('number-of-news');
    // How many news available in each catagory 
    numberOfNewsContainer.innerHTML = `
        <p> ${number.length} items found for  ${name} </p>
    `;


}

