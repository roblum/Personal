jQuery(function($){
	//Form Validation 02_06_14
	var v = {
		firstname: 	$('#firstname')
		,lastname: 	$('#lastname')
		,address: 	$('#address')
		,state: 	$('#state')
		,city: 		$('#city')
		,email: 	$('#email')
		,zip: 		$('#zip')
		,birthday: 	$('#post') //NOT USING STANDARD BIRTHDAY FIELD
	}

	//Mask Birthday field (Using Post)
	$(v.birthday).attr('placeholder','MM/DD/YYYY');
	$(v.birthday).mask('99/99/9999');

	//Fix Date.now on IE8
	Date.now = Date.now || function() { return +new Date; };

	//Add Error Message
	$('<div id="errorMessage">Please fill in the red highlighted boxes: <span id="s-firstname"></span> <span id="s-lastname"></span> <span id="s-email"></span> <span id="s-address"></span> <span id="s-state"></span> <span id="s-city"></span> <span id="s-zip"></span> <span id="s-birthday"></span></div>').appendTo('.SFields');


var generalMethods = {
	//Validate Alpha
	validateAlphaFields : function(field){
				console.log(field)
				var currentValue = $(v[field]).val();
				console.log('current value:' + currentValue);
					if (!currentValue || !currentValue.match(/^[A-z]+$/)){
						$(v[field]).addClass('Invalid');
						$('#s-'+ field).html(eval(field + 'Object.labelName'));
					} else{
						$(v[field]).removeClass('Invalid');
						$('#s-'+ field).empty();
					}
				return generalMethods.testSubmit();
	}
	//Enable submit button if parameter === 'enable', else disable submit button
	,disableEnable : function(condition){
				if (condition === 'enable'){
					//Enable submit button
					$('#form_submit_button, #form-submit-button').removeAttr('disabled');
				}
			}
	//Checks if current field highlighted is empty
	,checkEmpty : function(field){
				if (!field.value){
					$(field).addClass('Invalid');
					$('#s-'+ this.id).html(eval(this.id + 'Object.labelName'));
				} else{
					$(field).removeClass('Invalid');
					$('#s-'+ this.id).empty();
				}
	}
	//Test all fields to enable Submit Button
	,testSubmit : function(){
				var invalidCount = 0;
				$('#errorMessage span').each(function(){
					if ($(this).text().trim().length){
						invalidCount++;
					}
				});
					//Disable submit if any invalid fields
					if (invalidCount < 1){
						generalMethods.disableEnable('enable');
						$('#errorMessage').css('display','none');
						return true;
					} else{
						$('#errorMessage').css('display','block');
						return false;
					}
				}
}
			
//Validate Fields Functions
//=====================================================
var firstnameObject = {
			fieldName : 'firstname'
			,labelName : $('#sfield_firstname label').text().trim()
			,validate : generalMethods.validateAlphaFields
}, lastnameObject = {
			fieldName : 'lastname'
			,labelName : $('#sfield_lastname label').text().trim()
			,validate : generalMethods.validateAlphaFields
}, addressObject = {
			fieldName : 'address'
			,labelName : $('#sfield_address label').text().trim()
			,validate : function(){
					return generalMethods.testSubmit();
			}
}, stateObject = {
			fieldName : 'state'
			,labelName : $('#sfield_state label').text().trim()
			,validate : generalMethods.validateAlphaFields
}, cityObject = {
			fieldName : 'city'
			,labelName : $('#sfield_city label').text().trim()
			,validate : generalMethods.validateAlphaFields
}, emailObject = {
			fieldName : 'email'
			,labelName : $('#sfield_email label').text().trim()
			,validate : function(){
						var emailVal = v.email.val();
							if(!emailVal || !emailVal.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+/)) {
								$(v.email).addClass('Invalid');
								$('#s-email').html(emailObject.labelName);
							} else{
								$(v.email).removeClass('Invalid');
								$('#s-email').empty();
							}
							return generalMethods.testSubmit();
						}
}, zipObject = {
		fieldName : 'zip'
		,labelName : $('#sfield_zip label').text().trim()
		,validate : function(){
					var zipVal = v.zip.val();
						if(!zipVal || !zipVal.match(/^[0-9]+$/)){
							$(v.zip).addClass('Invalid');
							$('#s-zip').html(zipObject.labelName);
						} else{
							$(v.zip).removeClass('Invalid');
							$('#s-zip').empty();
						}
							return generalMethods.testSubmit();
					}
}, birthdayObject = {
		fieldName : 'birthday'
		,labelName : $('#sfield_post label').text().trim()
		,validate : function(){
					var birthdayValue = $(v.birthday).val().replace(/\D/g,'')
						,bmonth = birthdayValue.slice(0,2)
				        ,bdate = birthdayValue.slice(2,4)
				        ,byear = birthdayValue.slice(4,8)
				        ,convertDate = new Date(byear, bmonth, bdate)
			        	,compareDate = convertDate.getTime()
						,dayInMilliseconds = 1000 * 60 * 60 * 24;

					if(!birthdayValue || Date.now() - compareDate < dayInMilliseconds * 365.25 * 18 + dayInMilliseconds || birthdayValue.length !== 8 || parseInt(bmonth) < 1 || parseInt(bmonth) > 12 || parseInt(bdate) < 1 || parseInt(bdate) > 31) {
					    $(v.birthday).addClass('Invalid');
					    $('#s-birthday').html(birthdayObject.labelName);
					} else{
					    $(v.birthday).removeClass('Invalid');
					    $('#s-birthday').empty();
					}
					return generalMethods.testSubmit();
				}
}


//EVENT HANDLERS - DO NOT CHANGE
//=====================================================

	//First Name, Last Name, State, and City must not have digits
	$(v.firstname).add(v.lastname).add(v.state).add(v.city).bind('keyup', function(){
		this.value = this.value.replace(/\d|[\.,<>-?\/#!@$%\^&\*;:{}=+\-_`'"~()\\\[\]\|]/g,'');
		eval(this.id + 'Object.validate(' + JSON.stringify(this.id) + ')');
	});

			//Email must match correct format
			$(v.email).bind('keyup',function(){
				emailObject.validate();
			});

					//Zip Code must be numbers
					$(v.zip).bind('keyup', function(){
				  		this.value = this.value.replace(/[^0-9]/g,'');
				  		zipObject.validate();
					});

							//Address must start out with digits, then one space
							$(v.address).bind('keyup',function(){
								generalMethods.checkEmpty(this);
								generalMethods.testSubmit();
							});

									//Birthday must be 18 or older
									$(v.birthday).bind('keyup',function(){
										birthdayObject.validate();
									});

						//Auto Complete Check
						$('#frmSignUp input').change(function(){
							generalMethods.testSubmit();
						});


//Validate all fields when Submit button is clicked
//=====================================================
		$('#frmSignUp').submit(function(event){
				var failures = 0;
				for (x in v){
					if (!eval(x + 'Object.validate('+ JSON.stringify(x) +')')){
						failures++;
						console.log(failures)
					}
					
				}
				if (!failures) {return true;}else{return false;}
		});

});