**Ecommerce product search API using NodeJS, ExpressJS and MongoDB**


**Features** </br>

- Product paging based on limits. </br>  
- Product searching via name made easier with the use of mongoDB regular expressions </br>
- Numeric Filters (for example :- render products whose price is greater than 40) </br>


**Routes** </br>

`/api/v1/products`</br>
`/api/v1/products/static`</br>
`/api/v1/products?name=VALUE & price=VALUE` Search products on the basis of name and price </br>
`/api/v1/products?sort=price name` --Sort products on the basis of name and price </br>
`/api/v1/products?select=name` -- API will respond only with the names of the products </br> 
`/api/v1/products?numericFilters=price<=40` --API will respond with the details of the products whose price is less than 40 </br>



**How to use?** </br>
1. Run `npm install` to install the dependencies from package.json </br>
2. Create a .env file
3. Place your MongoDB uri as MONGO_URI=yourURI
4. Manupulate the schemas as required in `model.js`
5. Match the view fetching from the API route above
6. Take a look at `controllers.js` to match with the way API is responding to render contents in the front end 

