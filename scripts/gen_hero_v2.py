"""Generate Hero v2 — woman receiving lipo laser treatment, white robe, pads with red LEDs."""
import asyncio, os, base64
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv("/app/backend/.env")
api_key = os.getenv("EMERGENT_LLM_KEY")

PROMPT = """Cinematic editorial photograph for D'Royal Spa luxury Miami in-home lipo laser treatment website hero section.
Wide ultra-wide 16:9 composition with vast deep negative space on the LEFT half of the frame for headline text overlay.

CENTRAL SCENE (right two-thirds of frame):
A young elegant woman lying back on a luxurious dark mahogany leather spa lounger in serene relaxation, eyes gently closed, peaceful expression.
She wears a pristine WHITE LUXURY SPA BATHROBE with long sleeves (open in front to expose treatment area) — premium thick cotton terry, not a towel.
Her abdomen is exposed showing the LIPO LASER TREATMENT in active progress:
On her toned abdomen and waist are placed multiple LIPO LASER PADS — flat rectangular medical-aesthetic pads with visible BRIGHT RED LED LIGHTS GLOWING and ACTIVELY EMITTING red laser light.
The red LED dots are clearly visible, glowing intensely, casting subtle red light reflections on her skin showing the device is ACTIVATED and working.
Premium beige fabric straps secure the pads gently around her torso.

LIGHTING:
Single dramatic warm amber spotlight from upper right (like luxury spa pendant lamp) illuminating her body and face softly.
The red LED glow from the lipo pads adds a secondary subtle red ambient highlight on her skin and surrounding fabric — barely visible but technically beautiful.
Deep cinematic chiaroscuro shadows, mostly dark warm chocolate-brown tones in the room.
Dim warm candlelight in far background creating bokeh.

SETTING:
Luxury private in-home spa setup. Out-of-focus background hints at: warm wood paneling, hint of velvet drapes, brass fixtures, candles, white orchid in shadow.
The vibe is exclusive Miami in-home luxury treatment, like a private suite at the Faena Hotel.
Background fades to deep warm chocolate-black darkness on the LEFT side providing perfect negative space for white serif headline.

COLOR PALETTE strictly:
Deep espresso brown #1a0f0a, warm chocolate, antique gold #c9a875, bright cream skin tones,
red LED accents (only on the pads, glowing), gold candlelight highlights #e8c789.
NO blue, NO purple, NO neon, NO cool tones, NO green.

PHOTOGRAPHIC STYLE:
Shot on Hasselblad medium format, 80mm lens, f/2.8 shallow depth of field for slight background blur,
ISO 400 film grain Kodak Portra 800 aesthetic, subtle vignette, fine analog grain,
sharp focus on the lipo pads with glowing red LEDs and on her serene face,
soft creamy bokeh on background.

REFERENCE AESTHETIC:
Vogue Beauty editorial, Tom Ford Beauty campaign, Aesop spa imagery,
mont-fort.com cinematic atmosphere but in luxury Miami spa context.
Editorial spa magazine quality, Harper's Bazaar Beauty cover.
Hyperrealistic photographic, NOT illustrative, NOT cartoonish, NOT 3D-rendered.

Absolutely NO text in image, NO logos, NO typography, NO watermarks, NO captions, NO TikTok or social media overlays.
Pure cinematic photographic atmosphere of a real luxury lipo laser session in progress.
The patient looks blissful, professional, premium — this is the wellness ritual of an affluent client.
"""

async def main():
    chat = LlmChat(
        api_key=api_key,
        session_id="droyal-hero-v2-lipo",
        system_message="You are a master cinematic editorial photographer specializing in luxury beauty, aesthetic medicine, and high-end spa imagery for Vogue Beauty, Harper's Bazaar, and luxury skincare brand campaigns. You shoot in the style of master photographers like Steven Klein, Mert & Marcus, and Inez & Vinoodh."
    )
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(modalities=["image", "text"])
    
    msg = UserMessage(text=PROMPT)
    text, images = await chat.send_message_multimodal_response(msg)
    
    if images:
        out = "/app/home-3d/mockups/hero-v2-lipo.png"
        with open(out, "wb") as f:
            f.write(base64.b64decode(images[0]["data"]))
        print(f"OK -> {out}")
    else:
        print(f"FAIL: {text[:200] if text else 'no text'}")

asyncio.run(main())
