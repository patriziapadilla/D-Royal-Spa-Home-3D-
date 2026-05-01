"""Generate Hero v3 — royal gentle palette, lipo laser session in cream luxury setting."""
import asyncio, os, base64
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv("/app/backend/.env")
api_key = os.getenv("EMERGENT_LLM_KEY")

PROMPT = """Cinematic editorial photograph for D'Royal Spa luxury Miami in-home lipo laser website hero, royal-gentle warm palette.
Wide ultra-wide 16:9 composition with deep negative space on the LEFT for headline text overlay.

CENTRAL SCENE (right two-thirds):
A young elegant woman with smooth glowing skin reclining gracefully on a champagne-cream linen chaise lounge in serene relaxation, eyes gently closed, peaceful expression.
She wears a pristine WHITE PLUSH SPA BATHROBE with long sleeves (open over the abdomen to expose treatment area) — premium thick cotton terry, monogrammed luxury hotel quality.
Her toned abdomen exposed showing LIPO LASER PADS in active session:
multiple flat rectangular medical-aesthetic lipo laser pads placed across her abdomen and waist with BRIGHT RED LED LIGHTS GLOWING and emitting visible red laser dots, clearly ACTIVE.
Premium soft beige fabric strap securing pads gently.
Subtle red light reflections from the LEDs glowing on her skin showing the device is on.

ROYAL GENTLE SETTING (NOT dark, NOT black):
A bright airy luxury private spa suite in soft champagne, ivory cream, and antique gold tones.
Walls: warm ivory plaster with subtle gold leaf detail.
Floor: pale travertine marble.
Background features: cream linen drapes filtering soft sunlight, fresh white peony flowers in an antique brass vase, a brass tray with rolled white towels, golden candlelight, ornate cream upholstered French chair, hint of vintage gilt-framed mirror.
Soft natural daylight pouring from a left side window creating dreamy backlight, with warm gold accent lamp from upper right.
Background elegantly out-of-focus, dreamy soft bokeh, cream and champagne tones predominate.

LIGHTING:
Soft natural cream daylight from left window (the negative space side), warm golden lamp light from upper right.
Bright but gentle, no harsh shadows. Like Aman Resort spa or a Loro Piana boutique.
The red LEDs from the pads provide a subtle warm accent on the abdomen — visible but not dominating.

COLOR PALETTE (royal gentle, no black, no harsh dark):
Soft champagne #f5e9d3, ivory cream #ebd8b8, warm tan #d9c4a0, antique gold #c9a875, dusty rose accents #c2a39a, soft espresso #5c4a3a for darkest tones (NOT black), red LED on pads only.
The dominant atmosphere is BRIGHT warm cream, NOT dark.
NO blue, NO purple, NO neon, NO cool tones, NO pure black.

PHOTOGRAPHIC STYLE:
Hasselblad medium format, 80mm lens, f/2.8 shallow depth of field, ISO 200,
Kodak Portra 400 film stock aesthetic, slight subtle vignette, fine analog grain,
sharp focus on face and the lipo pads with red LEDs,
creamy bokeh elsewhere.

REFERENCE AESTHETIC:
Vogue Living, Architectural Digest spa feature, Aman Resorts brochure, Loro Piana cashmere ad,
Le Sirenuse Capri editorial. Hyperrealistic photographic, NOT illustrative.
A discreet, quiet luxury royal gentle aesthetic for an affluent Miami clientele.

Absolutely NO text, NO logos, NO typography, NO watermarks, NO captions.
Pure cinematic photographic atmosphere of an elegant in-home lipo laser session in a bright royal-gentle Miami private suite.
"""

async def main():
    chat = LlmChat(
        api_key=api_key,
        session_id="droyal-hero-v3-royal-gentle",
        system_message="You are a master cinematic editorial photographer specializing in luxury beauty, aesthetic medicine, and high-end interior + spa imagery for Vogue Living, Architectural Digest, Harper's Bazaar Beauty, and luxury brand campaigns like Aman, Loro Piana, Hermès."
    )
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(modalities=["image", "text"])
    msg = UserMessage(text=PROMPT)
    text, images = await chat.send_message_multimodal_response(msg)
    if images:
        out = "/app/home-3d/mockups/hero-v3-royal.png"
        with open(out, "wb") as f:
            f.write(base64.b64decode(images[0]["data"]))
        print(f"OK -> {out}")
    else:
        print(f"FAIL: {(text or '')[:200]}")

asyncio.run(main())
