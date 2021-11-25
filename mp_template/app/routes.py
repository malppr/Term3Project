from app import application
from flask import render_template, flash, redirect, url_for
from werkzeug.urls import url_parse
from flask import request 
from app.serverlibrary import * 

@application.route('/')
@application.route('/index')
def index():
	return render_template('index.html', title='Home')

# write down your handler for the routes here

@application.route('/pred')
def pred():
	return render_template('pred.html', title='Predict')

@application.route('/quiz')
def quiz():
	return render_template('quiz.html', title='Quiz',
							users=getqn())

