


/**
 *@notice protocol game questions and answers manager
    *@dev : This class manages the game questions and test cases for astrolith
    **/
export class GameQuestionAndTestCases {

    constructor(
        web5,
        protocol,
        gameQTCSchema,
        protocolID,
        protocolReady,
        currentUser){
        this.protocolID = protocolID;
        this.protocol = protocol;
        this.web5 = web5;
        this.gameQTCSchema = gameQTCSchema;
        this.gameQuestionAndTestCasesFilter = {
            protocol,
            protocolPath: "gameQuestionAndTestCases",
            schema: gameQTCSchema,

        };
        this.currentUser = currentUser;
        this.protocolReady = protocolReady

    }

    //get questions and test case object
    getQTC= async(qtcRecordID)=>{
        await this.protocolReady;
        const { record:QTCData } = await this.web5.dwn.records.read({
            // from:this.protocolID,
            message: {
                    filter: {
                        recordId: qtcRecordID,
                    }
                }
            })
        const qtc = await QTCData.data?.json();
        return qtc;
    }

    //get all quesitons and test cases
    getAllQTCs = async ()=>{
         await this.protocolReady;
        const { records:qtcDatas ,status} = await this.web5.dwn.records.query({
            from:this.protocolID,
            message: {
                    filter: {
                        ...this.gameQuestionAndTestCasesFilter,
                        dataFormat:"application/json"
                    }
                }
            })

            console.log("Queryrecords: " , qtcDatas,status,this.currentUser);
             const qtcs = await Promise.all(
								qtcDatas.map(async (el) => {
									const item = await el.data.json();
									return { ...item, id: el.id };
								})
							);
            // const qtcs = await qtcDatas.data.json();
        // const qtcs =await Promise.all(qtcDatas.map(el=>el.data?.json()));
        return qtcs;
    }
    //get all games for a given stage/level
    getAllQTCLevel = async (gameLevel)=>{
         await this.protocolReady;
        const { records: qtcDatas } = await this.web5.dwn.records.query({
					from: this.protocolID,
					message: {
						filter: {
							...this.gameQuestionAndTestCasesFilter,
							dataFormat: "application/json",
						},
					},
				});
            console.log(qtcDatas)
        const qtcs = await Promise.all(
					qtcDatas.map(async (el) => {
						const item = await el.data.json();
						return { ...item, id: el.id };
					})
				);
        console.log(qtcs)
        const stageGames = qtcs.filter(
					(game) => game.id.split("-")[game.id.split("-").length-1] === gameLevel
				);
        return stageGames;
    }

    //create a game question and test cases
    createGameQTCs= async (qtcObject) => {
         await this.protocolReady;
        const { record :qtcData} = await this.web5.dwn.records.create({
        data: qtcObject,
        message: {
            ...this.gameQuestionAndTestCasesFilter,
            author:this.currentUser,
            recipient: this.protocolID,
            published: true,
            dataFormat: "application/json"
        },
        });
        console.log(qtcData); 

        //attach qtc to protocol DID
        const { status:s2 } = await qtcData.send(this.protocolID);
       const {status} = await qtcData.send(this.currentUser);
       console.log(status, s2);
        return qtcData;
    };

    //update  game question and test cases data
    updateGameQTCs=async(qtcObject,qtcRecordID)=>{
        await this.protocolReady;
        // Get the qtc corresponding to the qtc record ID
        const { record:qtcData } = await this.web5.dwn.records.read({
            from:this.protocolID,
            message: {
                    filter: {
                        recordId: qtcRecordID,
                    }
                }
        });
        const qtc = await qtcData.data?.json();

        // Update qtc
        const {status} = await qtcData.update({ data: {...qtc,qtcObject} });
        return status;
    }

    //delete  game question and test cases data
    deleteGameQTCs=async(qtcRecordID)=>{
        const status = await this.web5.dwn.records.delete({
            from:this.protocolID,
            message: {
                    recordId: qtcRecordID,
            },
        });

        return status;
    }

}