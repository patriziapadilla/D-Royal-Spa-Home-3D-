"""Generate Hero (Section 01 Welcome) sample image for D'Royal Spa."""
import asyncio, os, base64
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv("/app/backend/.env")
api_key = os.getenv("EMERGENT_LLM_KEY")

PROMPT = """Cinematic editorial photograph for a luxury Miami spa website hero section. 
Wide 16:9 ultra-wide composition with deep negative space on the left side for text overlay.

Subject (positioned in the right third of the frame): a young elegant woman with smooth glowing skin, 
wrapped in pure white plush spa towel, eyes closed in serene relaxation, head tilted slightly back, 
soft golden warm steam/vapor rising organically from her face and shoulders, illuminated by 
warm amber backlight creating volumetric god-rays through the steam.

Setting: a dimly lit luxury private spa room at golden hour. Out-of-focus background hints at 
warm candle flames, dark velvet drapes, deep mahogany wood, hints of brass fixtures. 
Background fades into deep warm chocolate-black darkness on the left side providing perfect 
negative space for overlaid white serif headline text.

Lighting: single dramatic warm amber light source from upper right (window or candle), 
volumetric god rays cutting through the steam, deep cinematic shadows, soft skin glow, 
moody chiaroscuro, no harsh shadows on face.

Color palette strictly limited to: deep espresso brown #1a0f0a, antique gold #c9a875, 
warm cream skin tones, bright gold highlights #e8c789. 
Absolutely NO blue, NO purple, NO neon, NO cool tones whatsoever.

Photographic style: shot on Hasselblad medium format, 80mm lens, f/2 shallow depth of field, 
ISO 400 film grain, Kodak Portra 800 film stock aesthetic, slight subtle vignette darkening corners, 
fine analog grain texture, sharp on subject's face/steam, dreamy bokeh elsewhere.

Reference aesthetic: Vogue Beauty editorial, Tom Ford Beauty campaign, Aesop boutique imagery, 
mont-fort.com cinematic atmosphere but warm gold tones instead of cold blue mountains. 
Editorial spa magazine quality. Hyperrealistic, photographic, NOT illustrative, NOT cartoonish.

Absolutely NO text in image, NO logos, NO typography, NO watermarks, NO captions. 
Pure cinematic photographic atmosphere only.
"""

async def main():
    chat = LlmChat(api_key=api_key, session_id="hero-01-droyal", 
                   system_message="You are a master cinematic editorial photographer specializing in luxury beauty and spa imagery for Vogue, Harper's Bazaar, and high-end skincare brand campaigns.")
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(modalities=["image", "text"])
    
    msg = UserMessage(text=PROMPT)
    text, images = await chat.send_message_multimodal_response(msg)
    
    if images:
        out = "/app/home-3d/mockups/hero-01-sample.png"
        os.makedirs("/app/home-3d/mockups", exist_ok=True)
        with open(out, "wb") as f:
            f.write(base64.b64decode(images[0]["data"]))
        print(f"OK -> {out}")
    else:
        print("FAIL: no image")
        print("text:", text[:200] if text else "")

asyncio.run(main())
