define(['questAPI'], function(Quest){
	var API = new Quest();
	
    /**
    Settings
    **/

	// TODO: Add note that not currently used
	API.addQuestionsSet('dropd', 
	{
	    type: 'dropdown',
	    autoSubmit:false,
	    required: true
	});

	// TODO: Add note that not currently used
	API.addQuestionsSet('multi', 
	{
	    type: 'selectMulti',
	    autoSubmit:false,
	    required: true
	});

	// TODO: modify validation for study code format
	API.addQuestionsSet('text', 
	{
	    type: 'text',
	    autoSubmit:false,
	    required: true,
		pattern: /[0-9]{5}/,  // matches 5 digit zip
		maxlength: 5,         // prevents extra characters
		errorMsg: {
			pattern: "ZIP code must be a five-digit integer",
			maxlength: "ZIP code must be five-digit integer"
		}
	});

	
    /**
	Pages
	**/
	API.addPagesSet('basicPage',{
		noSubmit:false, 
		v1style: 2,
		decline: false,
		
		questions: [

		// Q1 study code
		// used to associate responses to IAT study and disseration survey
		{
			inherit: 'text',
			name: 'studycode',
			stem: 'Please enter your IAT study code, it should be the same one you entered on the Dissertation Survey:'
		}

		]
	});
	
	// ### Sequence
	API.addSequence(
	[
	    {inherit:'basicPage'} 
    ]);
    
	/**
	Return the script to piquest's god, or something of that sort.
	**/
	return API.script;
});





