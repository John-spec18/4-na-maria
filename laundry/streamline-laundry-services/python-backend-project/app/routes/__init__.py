from flask import Blueprint

routes_blueprint = Blueprint('routes', __name__)

from . import example_routes  # Import your route handlers here