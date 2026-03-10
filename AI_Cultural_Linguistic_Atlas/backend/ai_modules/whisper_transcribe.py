
# Mocked Whisper wrapper - replace with real Whisper calls in production
def transcribe(audio_path):
    return "[MOCK] Transcribed text from " + str(audio_path)
