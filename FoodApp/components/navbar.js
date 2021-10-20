function navbar()
{
    return `
    <h3><a href="index.html">Home</a></h3>
    <input type = "text" placeholder = "Enter your favourite recipe" id = "sbar"/>
    <div id="options">
        <h3><a href="ROD.html">Recipe of the day</a></h3>
        <h3><a href="LR.html">Latest recipes</a></h3>
        <h3><a href="#">Signin</a></h3>
        <h3><a href="#">Signup</a></h3>
    </div>`
    
}

export default navbar;