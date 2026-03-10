
# Mocked language detect - replace with fastText in production
def detect(text):
    if "namaste" in text.lower():
        return "hi"
    return "und"
