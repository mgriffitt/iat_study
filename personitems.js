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

		// TODO: remove
		// Q1 birthmonth
	    {
	        inherit: 'dropd',
	        name: 'birthmonth',
	        stem: 'What month were you born?',
	        answers: ["January", "February", "March", "April", "May", "June", "July","August","September","October", "November", "December"]
	    },

		// TODO: remove
		// Q2 birthyear
	    {
	        inherit: 'dropd',
	        name: 'birthyear',
	        stem: 'What year were you born?',
	        answers: [2004,2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1988,1987,1986,1985,1984,1983,1982,1981,1980,1979,1978,1977,1976,1975,1974,1973,1972,1971,1970,1969,1968,1967,1966,1965,1964,1963,1962,1961,1960,1959,1958,1957,1956,1955,1954,1953,1952,1951,1950,1949,1948,1947,1946,1945,1944,1943,1942,1941,1940,1939,1938,1937,1936,1935,1934,1933,1932,1931,1930,1929,1928,1927,1926,1925,1924,1923,1922,1921,1920]
	    },

		// TODO: remove
		// Q3 race
		{
			inherit: 'multi',
			name: 'race',
			stem: 'What is your race? Select all that apply. You may select more than one.',
			answers: ["American Indian or Alaska Native", "Asian", "Black or African American", "Hispanic or Latino", "Middle Eastern or North African", "Native Hawaiian or other Pacific Islander", "White", "Another race or ethnicity not listed here", "Decline to answer"]
		},

		// TODO: remove
		// Q4 genderidentity
	    {
	        inherit: 'dropd',
	        name: 'genderidentity',
	        stem: 'What is your gender identity?',
	        answers: ['Man', 'Woman', 'Non-binary OR genderqueer OR agender OR gender non-conforming OR another identity not listed here', 'Decline to answer']
	    },

		// TODO: remove
		// Q5 zipcurrent
		{
			inherit: 'text',
			name: 'zipcurrent',
			stem: 'What is the ZIP code of your current residence? Please enter a five digit ZIP code.'
		},

		// TODO: remove
		// Q6 ziplongest
		{
			inherit: 'text',
			name: 'ziplongest',
			stem: 'What is the ZIP code of the place you have lived the longest? Please enter a five digit ZIP code.'
		},

		// TODO: add study code question
		// Q1 study code
		// {}

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





