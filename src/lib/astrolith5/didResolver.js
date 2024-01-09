/**
 *@notice astrolith DID resolver
 *@dev : This class manages resolvers and getters for players user names
 **/

export class AstrolithDIDResolver {
	constructor(web5,protocol, protocolID,didSchema) {
		this.protocol = protocol,
		this.protocolID = protocolID;
		this.web5 = web5;
		this.didResolverSchema = didSchema;
		this.didResolverFilter = {
			protocol: protocol,
			protocolPath: "didResolver",
			schema: didSchema,
			dataFormat: "application/json",
		};
	}
	readOrCreate = async(userDID)=>{

		const { records } = await this.web5.dwn.records.read({
			from: this.protocolID,
			message: {
				filter: {
					...this.didResolverFilter,
					recipient: userDID,
				},
			},
		});

		console.log(records, "add record", this.didResolverFilter);

		if (!records || records?.length == 0) {
			const { record } = await this.web5.dwn.records.create({
				data: {
					"@type": "didResolver",
					userName: "astrolithDIDName",
					userDID: this.protocolID,
				},
				message: {
					...this.didResolverFilter,
					dataFormat: "application/json",
					published: true,
					recipient: this.protocolID,
				},
			});
			console.log("ran before:", record, { ...this.didResolverFilter });

			const { status: s1 } = await record.send(this.protocolID);
			const { status: s2 } = await record.send(userDID);
			console.log(record, s1,s2, "resolver records created");
			const data = await record.data.stream();
			console.log(data, "from a stream");
			return record;
		}
	}
	//add DID user names
	hookupUserDID = async (userName, userDID) => {
		//check if userName is valid
		const isValid = isValidUserName(userName);
		if(isValid) return {status:422,message:`Invalid user name ${userName}`};
		const { record: userNameDatas } = await this.web5.dwn.records.read({
			from: this.protocolID,
			message: {
				filter: {
					...this.didResolverFilter,
				},
			},
		});
		const userNames = await Promise.all(
			userNameDatas.map((el) => el.data?.json())
		);

		//check if did already exists on the username
		const existUserNameResolved = userNames.find(
			(user) => user[`${userDID}`] === userDID
		);
		//check if userName exists
		const existUserName = userNames.filter((user) =>
			user.userName === userName
			// Object.prototype.hasOwnProperty.call(user, userName)
		);

		if (existUserNameResolved)
			return {
				status: 400,
				message: `User ${userName} is already mapped to your DID.`,
			};
		if (existUserName)
			return {
				status: 400,
				message: `User ${userName} is already existing; try another`,
			};
		//add name
		const { status } = await userNameDatas.update({
			data: { ...userNames, [`${userName}`]:userName,[`${userDID}`]: userDID },
		});
		return { status, message: `User ${userName} resolved successfully` };
	};

	//resolve DID
	resolve = async (userDID) => {
		const  records  = await this.web5.dwn.records.read({
			from:this.protocolID,
			message: {
				filter: {
					...this.didResolverFilter,
				},
			},
		});
		console.log(records, "user name from did resolver111");
		const didUserNames = await Promise.all(records.map((el) => el.data?.json()));
		console.log(didUserNames,"user name from did resolver")

		const userName = Object.entries(didUserNames).filter(
			([, value]) => value === userDID
		);
		console.log(userName, "resolver");
		return userName; //array [userName,DID]
	};
}

//utility function
const isValidUserName= (user)=> {
	// Regular expression to match only letters, numbers, and underscores
	const validPattern = /^[a-zA-Z0-9_]+$/;

	// Test if the string matches the pattern
	return validPattern.test(user);
}