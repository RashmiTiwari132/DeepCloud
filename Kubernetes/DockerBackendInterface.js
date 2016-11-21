var ODeployContainers = require(__dirname+"/DeployContainers.js");

module.exports = {
	deploy_application : function(userId) {
		ODeployContainers.create_deployment(userId);
	}
}


