# Despliegue a Heroku


* Crear carpeta contenedora del proyecto
* crear ambiente ej: conda create --name flask_deploy
* activar el ambiente
* pip3 install flask gunicorn 
* touch Procfile -> ( web: gunicorn wsgi:app)
* touch runtime.txt -> (python-3.7.5)
* crear carpeta app
* dentro de carpeta app crear main.py


```python
from flask import Flask 
  
app = Flask(__name__) 
  
@app.route("/") 
def index(): 
    return "<h1>Hola Formadores Sena!</h1>"
```

* de nuevo en el directorio del proyecto  
* touch wsgi.py

```python
from app.main import app 
  
if __name__ == "__main__": 
        app.run() 
```

* git init
* git add .
* git commit -m "primer commit"

* heroku login
* heroku create sam-sena-app
* git push heroku master