export const level1 = {
	scene1: {
		id: "scene1-level1-01",
		title: "Declaring of variables , primitive & non-primitive types",
		description:
			"Declare two variables called playerLife and expectedPoints and assign them values of 100 and 70 respectively",
		testCases: [
			{
				input: [null],
				output: 100,
				title: "playerLife variable should be 100",
			},
			{
				input: [null],
				output: 70,
				title: "expectedPoints variable should be 70",
			},
		],
		testRunner: "console.log(playerLife);console.log(expectedPoints);",
	},
	scene2: {
		id: "scene2-level1-01",
		title: "Declaring of variables , primitive & non-primitive types",
		description:
			"Declare two variables called elixer and coins and assign them values of 2 and 50 respectively",
		testCases: [
			{ input: [null], output: 2, title: "elixer variable should be 2" },
			{ input: [null], output: 50, title: "coins variable should be 50" },
		],
		testRunner: "console.log(elixer);console.log(coins);",
	},
	scene3: {
		id: "scene3-level1-01",
		title: "Declaring of variables , primitive & non-primitive types",
		description:
			"Declare two variables called woodenSword and woodenShield and assign them values of 100 and 120 respectively; add the values of woodenSword and woodShield together and assign the result to another variable called strength",
		testCases: [
			{
				input: [null],
				output: 100,
				title: "woodenSword variable should be 100",
			},
			{
				input: [null],
				output: 120,
				title: "woodenShield variable should be 120",
			},
			{ input: [null], output: 220, title: "strength variable should be 220" },
		],
		testRunner:
			"console.log(woodenSword);console.log(woodenShield);console.log(woodenSword + woodenShield);",
	},
	scene4: {
		id: "scene4-level1-01",
		title: "Declaring of variables , primitive & non-primitive types",
		description:
			"Declare three variables called speak,echo and shout and assign them values of 'Honing my javascript skills to kill the woman-wolf','wolf! wolf wol wo w' and 'I will be unstoppable, but first some food!!!' respectively. Concatenate variables speak and echo, assign the value to another variable called voice. create a new variable called forestEffect and assign the value of shout 5 times to it Note: adding shout 5 times includes concatenation. also consider the spaces between",
		testCases: [
			{
				input: [null],
				output: "Honing my javascript skills to kill the woman-wolf",
				title:
					"speak variable should be 'Honing my javascript skills to kill the woman-wolf'",
			},
			{
				input: [null],
				output: "wolf! wolf wol wo w",
				title: "echo variable should be 'wolf! wolf wol wo w'",
			},
			{
				input: [null],
				output: "I will be unstoppable, but first some food!!!",
				title:
					"shout variable should be 'I will be unstoppable, but first some food!!!'",
			},
			{
				input: [null],
				output:
					"Honing my javascript skills to kill the woman-wolfwolf! wolf wol wo w",
				title: "voice variable should be a concatenation of speak and echo",
			},
			{
				input: [null],
				output:
					"I will be unstoppable, but first some food!!!I will be unstoppable, but first some food!!!I will be unstoppable, but first some food!!!I will be unstoppable, but first some food!!!I will be unstoppable, but first some food!!!",
				title: "forestEffect variable value should be shout added 5 times",
			},
		],
		testRunner: "console.log(speak);console.log(echo);console.log(shout);console.log(speak+echo);console.log(forestEffect);",
	},
};
