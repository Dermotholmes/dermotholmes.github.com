/*
	Javascript document
*/

//Prevents error from using console.log in IE
	try { console.log('init console... done'); } catch(e) { console = { log: function() {} } }


	
	
	
//Revealing module patern page setup
	var page = function(){
	
		//Variables
		//=========
			
		
		//Objects
		//-------
			var theDude = function(){
				function introduce(){
					console.log('The dude is here');
				}
				return{
					introduce: introduce
				}
			}();
		
		//Functions
		//---------
		function sampleFunction(x,y){
			return x;
		}
		
		// Binding functions
		// -----------------
		function sampleBindingFunction(){
			$('#sampleTarget').addClass("example");
		}
		
		return{
			init: function(){
				theDude.introduce();
			}
		}
		
		
	}();
	

//Document ready
	$(document).ready(function() { 
		page.init();
	});