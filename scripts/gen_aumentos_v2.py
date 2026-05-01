"""Regenerate Aumentos image with 2 large vacuum cups."""
import asyncio, os, base64
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv("/app/backend/.env")
api_key = os.getenv("EMERGENT_LLM_KEY")

PROMPT = """Cinematic editorial photograph for D'Royal Spa AUMENTOS SIN CIRUGÍA CON LÁSER (vacuum therapy for glute enhancement) section.
Wide ultra-wide 16:9 composition, deep negative space on the LEFT for headline text overlay.

SUBJECT (right two-thirds):
A young elegant woman lying face-down on a luxury cream linen massage table in a peaceful royal-gentle spa suite,
head turned to the side resting on a soft cream pillow, eyes gently closed in serene relaxation, peaceful smile.
She wears a pristine WHITE LUXURY MONOGRAMMED 'D'ROYAL SPA' BATHROBE (thick cotton terry, gold DR monogram embroidery) 
draped tastefully over her upper back and lower body for full modesty.
Her glute area is gently exposed for the treatment.

VACUUM THERAPY (most important):
Two LARGE elegant clear glass vacuum cups (one per glute, each cup covers the ENTIRE glute area, large bowl-sized) 
firmly attached by suction to her glutes, gently lifting and sculpting the natural contour. 
The cups are made of premium clear glass with brass/gold rims.
Premium gold-cream silicone tubes connect each cup to a sleek elegant gold-and-cream electronic vacuum device 
on a brass side tray nearby.
The cups create a beautiful gentle visible lifting effect on her glutes, naturally enhancing the round contour.
NOT 4 small cups — exactly TWO LARGE cups, one per glute, each cup big enough to cover most of one glute.

ROYAL GENTLE SETTING (NO black, NO dark):
Bright airy luxury private spa suite. Warm ivory plaster walls, pale travertine marble floor,
cream linen drapes filtering soft daylight, fresh white peonies in antique brass vase, 
brass tray with rolled white towels, golden candlelight, cream upholstered French chair, gilt mirror.

LIGHTING:
Soft natural cream daylight from a left side window, warm golden lamp accent from upper right.
Bright but gentle, no harsh shadows, dreamy soft.

CAMERA: side-overhead view showing her serene face AND the two large cups on her glutes.
Modest tasteful editorial framing, NO nudity, like a Vogue Beauty magazine wellness spread.
Pose looks blissful, professional, premium.

COLOR PALETTE: champagne #f5e9d3, ivory cream #ebd8b8, antique gold #c9a875, dusty rose accents, 
warm cream skin tones, soft espresso for darkest tones (NEVER black).
NO blue, NO purple, NO neon, NO cool tones.

PHOTOGRAPHIC STYLE: Hasselblad medium format, 80mm f/2.8, ISO 200, Kodak Portra 400 film stock,
subtle vignette, fine grain, sharp focus on the cups and her face, creamy bokeh.

REFERENCE: Vogue Beauty wellness editorial, Aman Resort spa brochure, Hermès skincare campaign.
Hyperrealistic photographic, NOT illustrative.

Absolutely NO text, NO logos visible (subtle DR monogram on robe is fine), NO watermarks, NO captions.
"""

async def main():
    chat = LlmChat(
        api_key=api_key,
        session_id="droyal-aumentos-v2",
        system_message="You are a master cinematic editorial beauty photographer for Vogue and luxury spa brands."
    )
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(modalities=["image", "text"])
    msg = UserMessage(text=PROMPT)
    text, images = await chat.send_message_multimodal_response(msg)
    if images:
        out = "/app/home-3d/mockups/treatment-aumentos-v2.png"
        with open(out, "wb") as f:
            f.write(base64.b64decode(images[0]["data"]))
        print(f"OK -> {out}")
    else:
        print(f"FAIL: {(text or '')[:200]}")

asyncio.run(main())
