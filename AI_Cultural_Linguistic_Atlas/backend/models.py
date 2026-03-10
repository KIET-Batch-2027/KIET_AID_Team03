
# models.py - SQLAlchemy models (optional for extension)
from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Language(Base):
    __tablename__ = "languages"
    id = Column(Integer, primary_key=True)
    code = Column(String, unique=True)
    name = Column(String)
    state = Column(String)
    family = Column(String)
    speakers = Column(String)
    description = Column(Text)
