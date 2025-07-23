from fastapi import FastAPI, File, UploadFile, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from io import BytesIO
import joblib
from tensorflow.keras.models import load_model
import numpy as np
import tensorflow as tf
from PIL import Image
from PyPDF2 import PdfReader
import cv2
from tensorflow.keras.preprocessing import image
import os
import shutil
import pandas as pd
import json
import docx
import re
import io

app=FastAPI()

##uvicorn main:app --reload 