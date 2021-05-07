import http.server

class CORSRequestHandler (http.server.SimpleHTTPRequestHandler):
    def end_headers (self):
        self.send_header('Access-Control-Allow-Origin', '*')
        http.server.SimpleHTTPRequestHandler.end_headers(self)

server_address = ('localhost', 8000)
httpd = http.server.HTTPServer(server_address, CORSRequestHandler)
httpd.serve_forever()


