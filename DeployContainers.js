const http = require('http');
const exec = require('child_process').exec;

const runcommand_docker3 = "curl -k -H \"Content-Type: application/json\" -X POST -d @deployment_ubuntu.json http:\/\/s3-worker1.ece.ufl.edu\/apis\/extensions\/v1beta1\/namespaces\/default\/deployments\/";

var create_deployment = function(userId){
	console.log("Inside run_container ");
	try{
		exec(runcommand_docker3, function(error, stdout, stderr){
			if(error != null){
				console.log("Error: "+error);	
			}else{
				console.log("ExecuteContainer: run_contaner(): UserId "+userId+" finished execution");
				console.log(stdout);
			}
		});
	}catch(error){
		console.log("Error: "+error);
		return;
	}
};


module.exports.create_deployment = create_deployment;