async function showdata(url)
{
    let res =  await fetch(url);
    let data = await res.json();
    return data;
}
function search(output,container)
{
    let query = document.getElementById("sbar").value;

    console.log(query);
    
    fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${query}`).then((res)=>{return res.json()}).then((res)=>{showresults(res.meals,output,container)});
}
var delay;
function debounce(func,time,output,container)
{
    if(delay)
    {
        clearTimeout(delay);
    }
    delay = setTimeout(()=>{func(output,container)},time);
    
}
function showresults(res,container,vessel)
{
    container.innerHTML = null;

    container.style.display = "block";

    res.forEach(({strMeal}) => {
        
        let name = document.createElement('p');
        
        name.innerText = strMeal;

        name.onclick = function()
        {
            showrequests(res,vessel)
        }

        container.append(name);
    });
}
function Append(data, container)
{
    let name = document.createElement('h1');

    name.innerText = data.strMeal;

    let category = document.createElement('h3');

    category.innerText = data.strCategory;

    let image = document.createElement('img');

    image.src = data.strMealThumb;

    let items = document.createElement('h3');

    items.innerText = "Ingredients";

    let ingredients = document.createElement('ol');

    let str = "";

    for(let i=1;i<=10;i++)
    {
       let a = data[`strIngredient${i}`];
       let b = data[`strMeasure${i}`]
        str += `<li> ${a} : ${b}</li>`;
    }

    ingredients.innerHTML = str;

    let recipe = document.createElement('p');

    recipe.textContent = data.strInstructions;

    let videoid = document.createElement('p');

    videoid.innerText = data.strYoutube.split('=')[1];

    let video = document.createElement('div');

    video.innerHTML = `<iframe width="956" height="538" src="https://www.youtube.com/embed/${videoid.textContent}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    container.append(name,category,image,items,ingredients,recipe,video)
}

function showrequests(request,container)
{
    container.innerHTML = null;
    
    request.forEach(({strMeal,strMealThumb,strCategory})=>{

        let div = document.createElement('div');

        let name = document.createElement('p');

        name.innerText = strMeal;

        let category = document.createElement('p');

        category.innerText = strCategory;

        let image = document.createElement('img');

        image.src = strMealThumb;

        div.append(image,name,category);

        container.append(div);
    })
}

function showLatest(request,container)
{
    container.innerHTML = null;
    
    request.forEach(({strMeal,strMealThumb,idMeal})=>{

        let div = document.createElement('div');

        let name = document.createElement('p');

        name.innerText = strMeal;

        let category = document.createElement('p');

        category.innerText = idMeal;

        let image = document.createElement('img');

        image.src = strMealThumb;

        div.append(image,name,category);

        container.append(div);
    })
}

export {showdata,search,debounce,showresults,Append,showrequests,showLatest};