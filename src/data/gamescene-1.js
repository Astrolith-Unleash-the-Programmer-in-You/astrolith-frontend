//each game scene should have at least 10 questions to cover all scenarios

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

//array manipulation
export const arrayManipulationLevel = {
	scene1: {
		id: "scene1-array-01",
		title: "Array Initialization and Access",
		description:
			"Initialize an array called 'numbers' with the values 5, 10, 15, 20. Access the second element of the array.",
		testCases: [
			{
				input: [null],
				output: 10,
				title: "The second element of the 'numbers' array should be 10",
			},
		],
		testRunner: "const numbers = [5, 10, 15, 20]; console.log(numbers[1]);",
	},
	scene2: {
		id: "scene2-array-01",
		title: "Array Push and Pop",
		description:
			"Add the value 25 to the end of the 'numbers' array with value [5, 10, 15, 20] . Remove the last element from the array.",
		testCases: [
			{
				input: [null],
				output: [5, 10, 15, 20, 25],
				title: "The 'numbers' array should have 25 as its last element",
			},
			{
				input: [null],
				output: 20,
				title:
					"The last element of the 'numbers' array should be 20 after removal",
			},
		],
		testRunner: "console.log(numbers.push(25));  console.log(numbers.pop());",
	},
	scene3: {
		id: "scene3-array-01",
		title: "Array Length and Concatenation",
		description:
			"Create a new array called 'moreNumbers' with values 30, 35, 40. Concatenate 'numbers' with value [5, 10, 15, 20]  and 'moreNumbers' into a new array called 'combinedNumbers'. Determine the length of 'combinedNumbers'.",
		testCases: [
			{
				input: [null],
				output: [5, 10, 15, 20, 30, 35, 40],
				title:
					"The 'combinedNumbers' array should have values from 'numbers' and 'moreNumbers'",
			},
			{
				input: [null],
				output: 7,
				title: "The length of the 'combinedNumbers' array should be 7",
			},
		],
		testRunner:
			"const moreNumbers = [30, 35, 40]; const combinedNumbers = numbers.concat(moreNumbers); console.log(combinedNumbers); console.log(combinedNumbers.length);",
	},
};
