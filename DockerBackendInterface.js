var ODeployContainers = require(__dirname+"/DeployContainers.js");
/*
var buildImageFile = "BuildImage.js";
var sendContainerStateFile = __dirname+"/../callbacks/SendContainerStates.js";
var ODeployContainers = __dirname+"/../DeployContainers.js";

var jsonFile = __dirname+"/../jsonfiles/UpdateContainersList.js";

var Odocker2 = require('./'+buildImageFile);

var writeJSONState = require(jsonFile);

var OsendContainerStates = require(sendContainerStateFile);


var userid ;


var start = function(pUserid){
	Odocker2.build_image(pUserid);
	OsendContainerStates.sendContainerState(pUserid, "Starting");	
	//writeJSONState.writeJSONFileSync(pUserid, "Starting");
}

var start_callback = function(error, containerInstance){
	if(error){
		console.log("Error "+ error);
	}else{
		console.log("Container "+containerInstance+" finished execution");
	}
}
*/
/*
 *Deprecated : execute_script

var execute_script = function(userid){
	start(userid);
}
*/

var deploy_application = function(userId){
	ODeployContainers.create_deployment(userId);
}("12");

module.exports.deploy_application = deploy_application;



