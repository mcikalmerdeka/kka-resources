from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

stream = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "user", "content": "Explain the benefits of streaming API responses."}
    ],
    stream=True, # Enable streaming
)

for chunk in stream:
    # Extract the content delta from each chunk
    content = chunk.choices[0].delta.content
    if content:
        print(content, end="", flush=True)
print() # for a final newline
