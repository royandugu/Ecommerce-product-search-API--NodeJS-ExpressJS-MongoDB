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
</br>

</br>
**Response format for non static** </br>
<img src="Images/2.jpg"/>
</br>
**Response format for static fields**</br>
<img src="Images/1.jpg/>

</br>
Additional info </br>
</br>

Paging logic (`controllers.js`):
We take in two variable values from request query (req.query), page and limit. Limit for the limit method to be attached 
with our mongoose model that limits the number of products to be sent as a response. Combination of skip method and limit
method be like :- </br>
skipBy=(page-1)*limit </br>
For example: I want 10 products in page number 2 then (2-1)*10. Therefore, skipBy=10. 
</br> </br>
Numeric Filters (`controllers.js`): 
The way values are requested into the API varies from the way values are handled by our mongoose query operators. For example:
We may get our request as price>=30. But this has to be handled as price:{$gt:30}. So an operator map is created to map corresponding
mongoose query operators for the ones we get as requests. Go through the request string replace the key of operatorMap with it's value.
price>=30 now becomes price-$gt-30. With the help of the '-' we spit this into three parts using JavaScript's spilt method. Then we can 
arrange them as price:{$gt:30}
</br>
</br>

**--Learned and implemented from John Smilga--**

