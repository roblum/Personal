jQuery(function($){
	//Form Validation 01_27_14
	var v = {
		firstname: 	$('#firstname')
		,lastname: 	$('#lastname')
		,email: 	$('#email')
		,address: 	$('#address')
		,state: 	$('#state')
		,city: 		$('#city')
		,zip: 		$('#zip')
		,birthday: 	$('#post') //NOT USING STANDARD BIRTHDAY FIELD
	}

	//Check Required Optins	
	/*var checkOptin = function(){
		if ($('.SDeclare:not(:has(>span))').length > 0){
				var optinNumber = [];
				$('.SDeclare:not(:has(>span))').each(function(){
					optinNumber.push($(this).attr('id'));
				});
					for (var i = 0; i < optinNumber.length; i++) {
						if (!$('#' + optinNumber[i] + ' input').is(':checked')){
							$('#' + optinNumber[i] + ' label').addClass('Invalid');
						} else{
							$('#' + optinNumber[i] + ' label').removeClass('Invalid');
						}
					}
		}
	}
	*/

	//Fix Date.now on IE8
	Date.now = Date.now || function() { return +new Date; };

	//Disable Auto-Complete on form
	$('#frmSignUp input').attr('autocomplete','off');

	//Mask Birthday field (Using Post)
	$(v.birthday).attr('placeholder','MM/DD/YYYY');
	$(v.birthday).mask('99/99/9999');

			//Enable submit button if parameter === 'enable', else disable submit button
			var disableEnable = function(condition){
				if (condition === 'enable'){
					//Enable submit button
					$('#form_submit_button, #form-submit-button').removeAttr('disabled');
				} else {
					$('#form_submit_button, #form-submit-button').attr('disabled','disabled');
				}
			}
			//Disable Submit Button on Page Load
			disableEnable(false);


	//Checks if current field highlighted is empty
	var checkEmpty = function(field){
		if (!field.value){
			$(field).addClass('Invalid');
		} else{
			$(field).removeClass('Invalid');
		}
	}

					//Test all fields to enable Submit Button
					var testSubmit = function(){
						var invalidCount = $('.Invalid').length
							,num = 0,cnum = 0;
						//Store amount of variables in "v" object
						for (s in v){++num;++cnum;}
						for (e in v){
							if (!v[e].val()){
								console.log(v[e].val())
								console.log(e + 'is empty' + 'num' + num);
								--num
							}
						}
						//If any are empty, disable submit and exit function
						if (num !== cnum){
							disableEnable(false);
							return false;
						}
						//checkOptin();
						//Disable submit if any invalid fields
						if (invalidCount < 1){
							disableEnable('enable');
						} else{
							disableEnable(false);
							return false;
						}
					}

//Validate Fields Functions
//=====================================================

	/*var validateAlphaFields = function(field){
		var currentValue = $(v[field]).val();
		if (!currentValue || !currentValue.match(/^[A-z]+$/)){
			$(v[field]).addClass('Invalid');
		} else{
			$(v[field]).removeClass('Invalid');
		}
		testSubmit();
	}


			var firstnameFunction = function(){
				var inputField = 'firstname';
				validateAlphaFields(inputField);
			}
			var lastnameFunction = function(){
				var inputField = 'lastname';
				validateAlphaFields(inputField);
			}
			var stateFunction = function(){
				var inputField = 'state';
				validateAlphaFields(inputField);
			}
			var cityFunction = function(){
				var inputField = 'city';
				validateAlphaFields(inputField);
			}
			*/

			var emailFunction = function(){
				var emailVal = v.email.val();
				if(!emailVal || !emailVal.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+/)) {
					$(v.email).addClass('Invalid');
				} else{
					$(v.email).removeClass('Invalid');
				}
				testSubmit();
			}

						//Birthday Validation Function
			var birthdayFunction = function(elem){
				var birthdayValue = $(v.birthday).val().replace(/\D/g,'')
					,bmonth = birthdayValue.slice(0,2)
			        ,bdate = birthdayValue.slice(2,4)
			        ,byear = birthdayValue.slice(4,8)
			        ,convertDate = new Date(byear, bmonth, bdate)
		        	,compareDate = convertDate.getTime()
					,dayInMilliseconds = 1000 * 60 * 60 * 24;
					console.log('desktop' + bmonth + '' + bdate + '' + byear);
				    
				checkEmpty(elem);

				if(!birthdayValue || Date.now() - compareDate < dayInMilliseconds * 365.25 * 18 + dayInMilliseconds || birthdayValue.length !== 8 || parseInt(bmonth) < 1 || parseInt(bmonth) > 12 || parseInt(bdate) < 1 || parseInt(bdate) > 31) {
					console.log('invalid birthday');
				    $(v.birthday).addClass('Invalid');
				} else{
					console.log('valid birthday');
				    $(v.birthday).removeClass('Invalid');
				}
				testSubmit();
			}

//EVENT HANDLERS
//=====================================================

	//First Name, Last Name, State, and City must not have digits
	$(v.firstname).add(v.lastname).add(v.state).add(v.city).bind('keyup', function(){
		this.value = this.value.replace(/\d|[\.,<>-?\/#!@$%\^&\*;:{}=+\-_`'"~()\\\[\]\|]/g,'');
		checkEmpty(this);
		testSubmit();
	});

		//Email must match correct format
		$(v.email).bind('keyup',function(){
			emailFunction();
		});

			//Zip Code must be numbers
			$(v.zip).bind('keyup', function(){
		  		this.value = this.value.replace(/[^0-9]/g,'');
		  		checkEmpty(this);
		  		testSubmit();
			});

					//Address must start out with digits, then one space
					$(v.address).bind('keyup',function(){
						checkEmpty(this);
						testSubmit();
					});

							//Birthday must be 18 or older
							$(v.birthday).bind('keyup',function(){
								var that = this;
								birthdayFunction(that);
							});

							$('#frmSignUp input').change(function(){
								console.log('this ran');
								testSubmit()
							});

/*
		$('#frmSignUp').unbind('submit').submit(function(event){
				for (x in v){
					eval(x + 'Function()')
				}
		});
		*/

});