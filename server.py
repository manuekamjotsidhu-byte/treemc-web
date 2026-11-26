import http.server
import os
import socketserver

PORT = 80
ROOT = os.path.dirname(os.path.abspath(__file__))

class TreeMCHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def send_error(self, code, message=None, explain=None):
        if code == 404:
            nf_path = os.path.join(ROOT, "404.html")
            if os.path.exists(nf_path):
                with open(nf_path, "rb") as f:
                    data = f.read()
                self.send_response(404)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.send_header("Content-Length", str(len(data)))
                self.end_headers()
                self.wfile.write(data)
                return
        super().send_error(code, message, explain)

socketserver.TCPServer.allow_reuse_address = True
with socketserver.ThreadingTCPServer(("", PORT), TreeMCHandler) as httpd:
    httpd.serve_forever()

