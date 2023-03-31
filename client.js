const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('path/to/definition.proto');
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

const client = new protoDescriptor.example.GreetingService('localhost:50051', grpc.credentials.createInsecure());

const name = 'John';
client.sayHello({ name }, (error, response) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(response.message);
});