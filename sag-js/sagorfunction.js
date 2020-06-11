var search_food_order_variables = {
	order_id: '',
	page: 1,
	ajax_request: 0
};
function search_food_order_advance() {
	$("#loading").show();
	
	search_food_order_variables.order_id = $('#order_id').val();
	
	$.ajax({
			   url: 'search_order_manage.php',
			   
			   data: {
				   order_id: search_food_order_variables.order_id,
				   page: search_food_order_variables.page
			   },
			   type: 'post',
			   success: function (output) {
				   search_food_order_variables.page = 1;
				   $("#searh_clear").show();
				   $("#loading").hide();
				   $('#search_order_result').html(output);
			   }
		   });
}


var search_new_add_price_variables = {
	vari_id: '',
	page: 1,
	ajax_request: 0
};
function new_add_price_func() {

	
	search_new_add_price_variables.vari_id = $('#vari_id').val();
	
	$.ajax({
			   url: 'new_vari_price_food_details.php',
			   
			   data: {
				   vari_id: search_new_add_price_variables.vari_id,
				   page: search_new_add_price_variables.page
			   },
			   type: 'post',
			   success: function (output) {
				   search_new_add_price_variables.page = 1;
				   $('#new_vari_price').html(output);
			   }
		   });
}


var search_food_name_advance_variables = {
	food_dish_search_name: '',
	page: 1,
	ajax_request: 0
};
function search_food_name_advance() {
	$("#loading").show();
	
	search_food_name_advance_variables.food_dish_search_name = $('#food_dish_search_name').val();
	
	$.ajax({
			   url: 'food_search_result.php',
			   
			   data: {
				   food_dish_search_name: search_food_name_advance_variables.food_dish_search_name,
				   page: search_food_name_advance_variables.page
			   },
			   type: 'post',
			   success: function (output) {
				   search_food_name_advance_variables.page = 1;
				   $("#searh_clear").show();
				   $("#loading").hide();
				   $('#search_food_result').html(output);
			   }
		   });
}



var search_cate_advance_variables = {
	cate_name_search: '',
	page: 1,
	ajax_request: 0
};
function search_cate_advance() {
	$("#loading").show();
	
	search_cate_advance_variables.cate_name_search = $('#cate_name_search').val();
	
	$.ajax({
			   url: 'cate_search_result.php',
			   
			   data: {
				   cate_name_search: search_cate_advance_variables.cate_name_search,
				   page: search_cate_advance_variables.page
			   },
			   type: 'post',
			   success: function (output) {
				   search_cate_advance_variables.page = 1;
				   $("#searh_clear").show();
				   $("#loading").hide();
				   $('#search_cate_result').html(output);
			   }
		   });
}


// FOOD ADD TO CART FUNCTION
var food_valiable = {
	add_to_cart: '',
	food_qty: '',
	food_id: '',
	vari_id: '',
	page: 1,
	ajax_request: 0
};
function food_add_to_cart() {

	$("#loading").show();
	
	food_valiable.add_to_cart     = $('#add_to_cart').val();
	food_valiable.food_qty     = $('#food_qty').val();
	food_valiable.food_id      = $('#food_id').val();
	food_valiable.vari_id      = $('#vari_id').val();
	
	$.ajax({
			   url: 'food_add_to_cart.php',
			   data: {
				   
				   add_to_cart: food_valiable.add_to_cart, food_qty: food_valiable.food_qty, food_id: food_valiable.food_id, vari_id: food_valiable.vari_id,
				  
				   page: food_valiable.page
				   
			   },
			   type: 'post',
			   success: function (output) {
				   food_valiable.page = 1;
				   $("#searh_clear").show();
				   $("#loading").hide();
				   $('#food_add_to_cart').html(output);
				   view_cart_sta();
				   setTimeout(function() {
                        $(".alert").alert('close');
                    }, 2000);
			   }
		   });
}

function view_cart_sta() {
	$.ajax({
			   url: 'cart_view_sta.php',
			   data: {
				   
			   },
			   type: 'post',
			   success: function (output) { 
				   $('#cart_load_view').html(output);
			   }
		   });
}






// ALL DELETE FUNCTION DELETE FUNCTION
function delete_function_con(id, table_name)
{
	var x = confirm("Are you sure to delete this Permanently ?");
	if(x)
	{
		delete_function(id, table_name);
	}
}


function delete_function(id, table_name) 
{	

	
	var xmlRequest = GetXmlHttpObject();
	if (xmlRequest == null)
    return;			
	
		var url="all_delete_function.php?id="+id+"&table_name="+table_name; 
    	var browser=navigator.appName;
		if (browser=="Microsoft Internet Explorer")
		{
			xmlRequest.open("POST",url, true);
		}
		else
		{
			xmlRequest.open("GET",url, true);
		}
		
		xmlRequest.setRequestHeader("Content-Type", "application/x-www-formurlencoded");
		xmlRequest.onreadystatechange =function()
		{
			if(xmlRequest.readyState==4)
			{
				HandleAjaxResponse_delete_function(xmlRequest);
			}
		};
			xmlRequest.send(null);
			return false; 
} 
function HandleAjaxResponse_delete_function(xmlRequest)
{
	var xmlT=xmlRequest.responseText;
	//alert(xmlT);
	location.reload(); 
	return false;
}




// OBJECT FUNCTION
function GetXmlHttpObject()
	{		
		var xmlHttp=null;
		try
		{
		   xmlHttp=new XMLHttpRequest();
		}
		catch (e)
		{
			// Internet Explorer
			try
				{
					xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
				}
			catch (e)
				{
					xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
				}
		}
		return xmlHttp;
	  
}