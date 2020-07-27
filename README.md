# numbers-app
App that will call the numbers API to display interesting facts about the number the user enters 



## FRONT-END
 * get a JSON response from the API ✅ 
 * handle the JSON res properly with Fetch() ✅
 * console.log response ✅
 * DOM manipulation add res to  html elements ✅ 
 * Deployment failed ❌ (Because the API is served over HTTP it results in errors as the request to the API gets blocked because it must be served over https) 
 
 * Setup Frontend to call the serverless function to handle the request over HTTPS to prevent the CORS error 
 
 
 ## BACK-END 
 * make backend serverless function that acts as a proxy to the numbers API. 
 * Use AXIOS to handle errors. 
 * Add cors headers 
 * async function that awaits response 
 * handle JSON response 
 * deploy serverless function via vercel
 
 
 ERROR FROM DEPLOYED SITE: 

 ```
 Mixed Content: The page at 'https://numbers-app.vercel.app/' was loaded over HTTPS, but requested an insecure resource 'http://numbersapi.com/random/year?json'. This request has been blocked; the content must be served over HTTPS.
 
```


## SOLUTION / IDEAS: 

 * If you load a page in your browser using HTTPS, the browser will refuse to load any resources over HTTP.Changing the API      URL to have HTTPS instead of HTTP will resolve this issue. However, The serverless function for the API must not allow for    HTTPS connections. Because of this, the serverless function will request that they allow HTTPS connections.


 * This could also be solved by adding the following to the HTML however it will not be nearly as secure as using a serverless    function to handle the request securely: 

````
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 
```


