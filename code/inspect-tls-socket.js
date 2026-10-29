const tls = require("node:tls");

function inspectTlsHandshake(targetHost) {
  const connectionOptions = {
    host: targetHost,
    port: 443, // TLS port
    servername: targetHost,
    minVersion: "TLSv1.3",
  };

  const clientSocket = tls.connect(connectionOptions, function onConnected() {
    const ephemeralKey = clientSocket.getEphemeralKeyInfo();
    const protocolVersion = clientSocket.getProtocol();
    const cipherSuite = clientSocket.getCipher();

    console.log("=== TLS Handshake Inspection ===");
    console.log("Target Host:", targetHost);
    console.log("Protocol:", protocolVersion);
    console.log("Cipher Suite:", cipherSuite.name);
    console.log("Negotiated Key Exchange:", ephemeralKey);

    clientSocket.end();
  });

  clientSocket.on("error", function onError(error) {
    console.error("Handshake failed:", error.message);
  });
}

// Connect to a public Cloudflare edge supporting hybrid post-quantum groups
inspectTlsHandshake("google.com");
