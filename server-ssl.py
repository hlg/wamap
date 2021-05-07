import http.server, ssl

class CORSRequestHandler (http.server.SimpleHTTPRequestHandler):
    def end_headers (self):
        self.send_header('Access-Control-Allow-Origin', '*')
        http.server.SimpleHTTPRequestHandler.end_headers(self)


server_address = ('localhost', 443)
httpd = http.server.HTTPServer(server_address, CORSRequestHandler)
httpd.socket = ssl.wrap_socket(
  httpd.socket,
  server_side=True,
  certfile='localhost.pem',
  ssl_version=ssl.PROTOCOL_TLSv1_2
)
httpd.serve_forever()

