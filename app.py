from flask import Flask, request, send_file
from fontTools.misc.cython import returns

from word_cloud.text_image2_word_cloud import generator
app = Flask(__name__)

@app.route("/upload", method=["POST"])
def upload():
    image_file = request.files.get('image')
    text = request.form.get('text')
    gImg = generator(text,image_file)

    return send_file(gImg,mimetype="image/png")
