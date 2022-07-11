Ecommerce product search API using NodeJS, ExpressJS and MongoDB

Features : 

- Product paging based on limits.  
- Product searching via name made easier with the use of mongoDB regular expressions
- Numeric Filters (for example :- render products whose price is greater than 40)


-Routes 

`/api/v1/products`</br>
`/api/v1/products/static`
`/api/v1/products?name=VALUE & price=VALUE` --Search as per name and price
`/api/v1/products?sort=price name` --Sort on the basis of name and price
`/api/v1/products?select=name` -- API will respond only with the name of the product 
`/api/v1/products?numericFilters=price<=40` --API will respond with the details of the products whose price is less than 40

Features added so far 
- Database Connection
- Added the routes, controllers and model
- User can now search products based on name (regular expression where the product containing any character of the search will show up)
- Products can be searched as per price and company as well
- User can also sort the products based on any parameters passed
- Paging based on limit
