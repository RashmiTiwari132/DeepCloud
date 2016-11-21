var ODeployContainers = require(__dirname+"/DeployContainers.js");


var deploy_application = function(userId){
	ODeployContainers.create_deployment(userId);
};

//module.exports.deploy_application = deploy_application;
module.exports = {
	
	
}



