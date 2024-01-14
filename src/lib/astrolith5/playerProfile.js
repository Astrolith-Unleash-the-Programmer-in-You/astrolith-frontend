import { Temporal } from "@js-temporal/polyfill";

/**
 *@notice player profile related functionality
 *@dev : This class manages the player profile
 **/
export class PlayerProfile {
	constructor(web5, protocol, profileSchema, protocolID, protocolReady) {
		this.protocol = protocol;
		this.web5 = web5;
		this.profileSchema = profileSchema;
		this.protocolID = protocolID;
		this.profileFilter = {
			protocol,
			protocolPath: "profile",
			schema: profileSchema,
		};
		this.protocolReady = protocolReady;
	}

	//get profile
	getProfile = async (userDID) => {
		await this.protocolReady;
		const profileData = await this.web5.dwn.records.read({
			from: userDID,
			message: {
				filter: {
					...this.profileFilter,
				},
			},
		});

		console.log(profileData, "profile data");
		const profile = await profileData.data?.[0].json();

		return profile;
	};

	//get profiles
	getProfiles = async () => {
		await this.protocolReady;
		const { records: profileDatas, status } = await this.web5.dwn.records.query({
			// from: this.protocolID,
			message: {
				filter: {
					// ...this.profileFilter,
					schema: this.profileSchema,
				},
			},
		});
		console.log(profileDatas, status, "profile data");
		const profiles = await Promise.all(
			profileDatas.map((el) => el.data?.json())
		);
		return profiles;
	};

	//create profile
	createProfile = async (profileObject, userDID) => {
		await this.protocolReady;
		const { record: profile, status } = await this.web5.dwn.records.create({
			data:{ ...profileObject,createdAt:Temporal.Now.instant()},
			message: {
				...this.profileFilter,
				recipient: userDID,
				published: true,
			},
		});
		console.log(profile, "created", status, profileObject);
		//attach profile to the current user
		await Promise.all([profile.send(userDID, profile.send(this.protocolID))]);
		return profile;
	};

	//update profile
	updateProfile = async (profileObject, profileID) => {
		// Get the profile
		const { record: profileData } = await this.web5.dwn.records.read({
			message: {
				filter: {
					recordId: profileID,
					...this.profileFilter,
				},
			},
		});
		const profiles = await profileData.data?.json();

		// Update the profile
		const { status } = await profileData.update({
			data: { ...profiles, profileObject },
		});
		return status;
	};

	//delete profile
	deleteProfile = async (profileID) => {
		const status = await this.web5.dwn.records.delete({
			message: {
				recordId: profileID,
				...this.profileFilter,
			},
		});

		return status;
	};
}
