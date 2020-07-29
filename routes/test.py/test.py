import requests

link = "facebook.com\n"

response = requests.get("http://localhost:4500/checkdb/"+ link)

print(response.status_code, response.text)