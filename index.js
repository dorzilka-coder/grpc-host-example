const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('path/to/definition.proto');
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.addService(protoDescriptor.example.GreetingService.service, {
  sayHello: (call, callback) => {
    const name = call.request.name;
    const message = `Hello, ${name}!`;

    callback(null, { message });
  },
});


server.bind('localhost:50051', grpc.ServerCredentials.createInsecure());
server.start();