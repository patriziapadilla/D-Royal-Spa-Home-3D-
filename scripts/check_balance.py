"""Quick balance check via Gemini Nano Banana."""
import asyncio, os, base64
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv("/app/backend/.env")
api_key = os.getenv("EMERGENT_LLM_KEY")

async def main():
    chat = LlmChat(api_key=api_key, session_id="balance-check", system_message="test")
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(modalities=["image", "text"])
    msg = UserMessage(text="A single golden particle on black background, minimalist")
    try:
        text, images = await chat.send_message_multimodal_response(msg)
        if images:
            with open("/tmp/balance_test.png", "wb") as f:
                f.write(base64.b64decode(images[0]["data"]))
            print("OK - balance available, generated 1 test image")
        else:
            print("WARN - no image returned")
    except Exception as e:
        print(f"ERR: {e}")

asyncio.run(main())
