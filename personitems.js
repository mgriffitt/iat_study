define(['questAPI'], function(Quest){
	var API = new Quest();
	
    /**
    Settings
    **/

	// NB: not currently used
	API.addQuestionsSet('dropd', 
	{
	    type: 'dropdown',
	    autoSubmit:false,
	    required: true
	});

	// NB: not currently used
	API.addQuestionsSet('multi', 
	{
	    type: 'selectMulti',
	    autoSubmit:false,
	    required: true
	});

	API.addQuestionsSet('text', 
	{
	    type: 'text',
	    autoSubmit:false,
	    required: true,
		pattern: /[CDGHJLMPQRTVWXYZ23456789]{8}/,  // matches study code charset
		maxlength: 8,  // prevents extra characters
		errorMsg: {
			pattern: "Study code must be an eight-character string of uppercase letters and numbers",
			maxLength: "Study code must be an eight-character string of uppercase letters and numbers"
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





