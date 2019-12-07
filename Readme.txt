Run build.sh to build the docker image
Run run.sh to run the docker image into container

To make GET request
   curl -X GET localhost:8080/get

To make POST request
   curl -X POST localhost:8080/1?y=test
   curl -X POST localhost:8080/1?y=test
	where y is the request param . You should get the request param that you provide as the response from POST.

	
