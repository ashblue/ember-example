export default function(server) {
  for (var i = 0, l = 20; i < l; i++) {
    server.create('entry', {});
  }
}
