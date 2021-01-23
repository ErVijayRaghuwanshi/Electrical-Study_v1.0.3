jQuery(document).ready(function () {
		  
		  if ( typeof localStorage['hasserial'] == 'undefined' ) {
			 serialgen();
		  }
		  function sen()
		  {
			  alert("here");
		  }
		  function serialgen()
		  {
			  localStorage['serial'] = Math.floor((Math.random() * 70000) + 1);
			  localStorage['hasserial'] = 'yes';
			  var number = localStorage['serial'],
			  output = [],
			  sNumber = number.toString();
			
			  for (var i = 0, len = sNumber.length; i < len; i += 1) 
			  {
			  	output.push(+sNumber.charAt(i));
		  	  }
			  
			  var sum = 0;
			  for (var i = 0; i < output.length; sum += output[i++]);
			  localStorage['correctkey'] = parseFloat(number) + parseFloat(sum) + 10212;
			  localStorage['validated'] = 'no';
		  }
		  
		  if ( typeof localStorage['trial'] == 'undefined' ) {
			 localStorage['trial'] = 3000;
		  }
		  if ( localStorage['trial'] == '0' ) {
			 localStorage['validated'] = 'suspend';
		  }
		  
		}(jQuery));

function successHandler (result) {
                var strResult = "";
                if(typeof result === 'object') {
                    strResult = JSON.stringify(result);
                } else {
                    strResult = result;
                }
                alert("SUCCESS: \r\n"+strResult );
				localStorage['validated'] = 'yes';
				window.location.href = "index.html";
            }

            function errorHandler (error) {
                alert("ERROR: \r\n"+error );
            }

            // Click on init button
            
            
            

            // Click on purchase button
            function buy(){
				// Initialize the billing plugin
                inappbilling.init(successHandler, errorHandler, {showLog:true});
                // make the purchase
                inappbilling.buy(successHandler, errorHandler,"electricalstudy");

            }

            // Click on ownedProducts button
            function ownedProducts(){
                // Initialize the billing plugin
                inappbilling.getPurchases(successHandler, errorHandler);

            }

            // Click on Consume purchase button
            function consumePurchase(){

                inappbilling.consumePurchase(successHandler, errorHandler, "electricalstudy");
            }

            // Click on subscribe button
            function subscribe(){
                // make the purchase
                inappbilling.subscribe(successHandler, errorHandler,"electricalstudy");

            }

            // Click on Query Details button
            function getDetails(){
                // Query the store for the product details
                inappbilling.getProductDetails(successHandler, errorHandler, "electricalstudy");

            }

            // Click on Get Available Products button
            function getAvailable(){
                // Get the products available for purchase.
                inappbilling.getAvailableProducts(successHandler, errorHandler);

            } 

// JavaScript Document
/* 
<button onclick="ownedProducts();">Owned products</button>
        <button onclick="consumePurchase();">Consume purchase</button>
        <button onclick="subscribe();">Subscribe</button>
        <button onclick="getDetails();">Query Details</button>
        <button onclick="getAvailable();">Get Available Products</button>
*/