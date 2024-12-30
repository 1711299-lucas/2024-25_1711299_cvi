#!/usr/bin/env python
"""
Masked wordcloud
================
Using a mask you can generate wordclouds in arbitrary shapes.
"""
from io import BytesIO
from os import path
from PIL import Image
import numpy as np
import matplotlib.pyplot as plt
import os

from wordcloud import WordCloud, STOPWORDS
def generator(client_text,client_image):
    str="naruto"
    # get data directory (using getcwd() is needed to support running example in generated IPython notebook)
    d = path.dirname(__file__) if ("__file__") in locals() else os.getcwd()

    # Read the whole text.
    text = client_text

    # read the mask image
    # taken from
    # http://www.stencilry.org/stencils/movies/alice%20in%20wonderland/255fk.jpg

    alice_mask = np.array(client_image)

    stopwords = set(STOPWORDS)
    stopwords.add("THE END")

    wc = WordCloud(background_color="white", max_words=2000, mask=alice_mask,
                   stopwords=stopwords, contour_width=3, contour_color='steelblue')

    # generate word cloud
    wc.generate(text)
    img_stream=BytesIO
    wc.to_image().save(img_stream,format="PNG")
    img_stream.seek(0)

    return img_stream