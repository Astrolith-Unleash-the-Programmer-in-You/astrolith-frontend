import { VerifiableCredential, PresentationExchange } from "@web5/credentials";
import { addYearsToCurrentYear } from "../../utils/TimeUtils";

/**
 *@notice certificate manager
 *@dev : This class manages certificates for astrolith
 **/
export class Certificates {
	certifcatePresentationDefinitions = {
		id: "CertificateOfCompletionAstrolithProtocol",
		name: "Astrolith Certificate",
		purpose: "Certification of completion for astrolith ",
		input_descriptors: [
			{
				id: "CertificateOfCompletion",
				purpose: "Certification of completion for astrolith ",
				constraints: {
					fields: [
						{
							path: ["$.credentialSubject.isCertified"],
						},
					],
				},
			},
		],
	};

	constructor(web5, protocol, certificateSchema, protocolID) {
		this.web5 = web5;
		this.protocolID = protocolID;
		this.protocol = protocol;
		this.certificateSchema = certificateSchema;
		this.certificateFilter = {
			protocol,
			protocolPath: "certificates",
			schema: certificateSchema,
		};
	}

	//get a user certificate
	getCertificate = async (certificateRecordID, userDID) => {
		const { record: certificateData } = await this.web5.dwn.records.read({
			from: userDID,
			message: {
				filter: {
					recordId: certificateRecordID,
					...this.certificateFilter,
				},
			},
		});
		const certificate = await certificateData.data?.json();
		return certificate;
	};

	//get all user certificates
	getAllCertificates = async (userDID) => {
		const { record: certifcatesData } = await this.web5.dwn.records.query({
			from: userDID,
			message: {
				filter: {
					...this.certificateFilter,
				},
			},
		});
		const certificates = await Promise.all(
			certifcatesData.map((el) => el.data?.json())
		);
		return certificates;
	};
	//using fabric js to generate images from templates
	//issue certificate
	issueCertificate = async (certificateObject) => {

		console.log(
			`Issuing certificate ${JSON.stringify(certificateObject)}`,
			certificateObject.userDID,
			certificateObject.holder
		);
		// Get the current date and time
		const CERTIFICATE_VALIDITY_DURATION = addYearsToCurrentYear(100);
		const expirationDate = CERTIFICATE_VALIDITY_DURATION;
		console.log(expirationDate);
		//create VC for astrolith
		const vc = await VerifiableCredential.create({
			type: "AstrolithCertificate",
			issuer: this.protocolID,
			subject: certificateObject.userDID,
			expirationDate: expirationDate,
			data: certificateObject,
		});

		console.log("Certificate",vc,"sert issuer")

		//sign certificate
		const vc_jwt_certificate = await vc.sign({
			did: this.protocolID,
		});

		console.log("Signing certificate",vc,"sert issuer error",vc_jwt_certificate);
		//create certificate
		const { record: certificateData } = await this.web5.dwn.records.create({
			data: { ...certificateObject, verifiableCertificate: vc_jwt_certificate },
			message: {
				...this.certificateFilter,
				published: true,
			},
		});
		console.log(certificateData, "certificate has been issued");
		//attach certificate to subject DID
		await Promise.all([
			certificateData.send(certificateObject.userDID),
			certificateData.send(this.protocolID),
		]);

		return certificateData;
	};

	//verify certificate using astrolith presentation exchange definition
	verifyCertificate = async (certificateRecordID, userDID) => {
		try {
			const certificate = await this.getCertificate(
				certificateRecordID,
				userDID
			);
			//validate certificate presentation
			const certificateDefinitionValidation =
				PresentationExchange.validateDefinition({
					presentationDefinition: this.certifcatePresentationDefinitions,
				});
			console.log("cert validation", certificateDefinitionValidation);
			PresentationExchange.satisfiesPresentationDefinition({
				vcJwts: [certificate.verifiableCertificate],
				presentationDefinition: this.certifcatePresentationDefinitions,
			});

			const presentationResult =
				PresentationExchange.createPresentationFromCredentials({
					vcJwts: [certificate.verifiableCertificate],
					presentationDefinition: this.certifcatePresentationDefinitions,
				});

			//verify credential
			const vcJwt = presentationResult.presentation.verifiableCredential?.[0];
			const certificateResult = await VerifiableCredential.verify({
				vcJwt,
			});
			const parsedVC = await VerifiableCredential.parseJwt({ vcJwt });

			return { verifiedCertificate: parsedVC, certificateResult };
		} catch (error) {
			console.log(error);
			return null;
		}
	};
}
