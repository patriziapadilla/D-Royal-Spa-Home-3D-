"""Generate 4 cinematic mockup atmospheres for D'Royal Spa using Gemini Nano Banana."""
import asyncio
import os
import base64
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv("/app/backend/.env")

api_key = os.getenv("EMERGENT_LLM_KEY")
OUT = "/app/home-3d/mockups"
os.makedirs(OUT, exist_ok=True)

PROMPTS = [
    (
        "01_hero",
        "Editorial cinematic luxury spa hero shot, 16:9 widescreen, ultra wide composition. "
        "Silhouette of an elegant woman's curvy back emerging from layers of warm golden silk mist, "
        "soft amber backlight, deep warm shadows, dark espresso brown atmospheric background fading to black, "
        "floating golden dust particles, silk fabric draped translucent, "
        "evokes haute couture Vogue editorial, mont-fort.com cinematic atmosphere but warm gold tones instead of cold, "
        "shot on Hasselblad, 85mm lens, shallow depth of field, mysterious, premium, magazine cover quality. "
        "Color palette: deep brown #0a0807, antique gold #d4af6b, cream #f5e9d3, bronze #8a6c47. "
        "NO TEXT, NO LOGOS, NO TYPOGRAPHY, just pure atmospheric luxury imagery."
    ),
    (
        "02_treatment",
        "Editorial luxury spa treatment scene, 16:9 cinematic, ultra wide. "
        "Close detail of elegant woman lying on marble spa table, golden body oil droplets cascading slowly in slow-motion, "
        "warm spotlight from above creating volumetric god-rays through golden steam, "
        "deep velvet shadows, cream silk sheets, brass tools faintly visible, "
        "dark warm atmospheric background, smooth silk fabric texture, dreamy luxury bali-meets-Paris-couture vibe. "
        "Cinematic mont-fort.com style framing with massive negative space on left, subject on right third. "
        "Color palette: deep brown #0a0807, antique gold #d4af6b, warm cream skin tones, bronze accents. "
        "Editorial Vogue Beauty Magazine aesthetic. NO TEXT, NO LOGOS, NO TYPOGRAPHY."
    ),
    (
        "03_atmosphere",
        "Pure abstract cinematic atmosphere, 16:9 widescreen, no subject. "
        "Layers of golden silk waves flowing horizontally like liquid gold mist, "
        "particles of suspended gold dust floating slowly, deep warm chocolate-brown shadows in foreground, "
        "soft amber glow in middle distance, total black void at the top, "
        "evokes drifting through clouds at sunset but in warm gold tones, "
        "ethereal premium luxury fog, dreamy hypnotic. "
        "Style of mont-fort.com mountain/cloud atmospheres but transformed into warm golden silk realm. "
        "Color palette: deep brown #0a0807, antique gold #d4af6b, cream #f5e9d3 highlights, bronze #8a6c47. "
        "NO TEXT, NO LOGOS, NO TYPOGRAPHY, NO PEOPLE, just atmospheric texture."
    ),
    (
        "04_detail",
        "Macro luxury beauty detail shot, 16:9 cinematic ultra wide. "
        "Close up of elegant feminine hands holding a vintage crystal glass dropper bottle of golden serum, "
        "single golden droplet suspended mid-air falling slowly, "
        "deep warm shadows, dramatic single-source backlight from upper right creating long sculptural shadows, "
        "background is dark warm atmospheric haze with hints of marble and gold, "
        "wet skin glow, dewy luxury, magazine quality, editorial fashion meets skincare advertising, "
        "Tom Ford Beauty x Christian Louboutin aesthetic but in warm gold instead of red. "
        "Cinematic mont-fort.com framing with deep negative space. "
        "Color palette: deep brown #0a0807, antique gold #d4af6b, warm cream skin, bronze. "
        "NO TEXT, NO LOGOS, NO BRAND NAMES, NO TYPOGRAPHY."
    ),
]


async def gen_one(name: str, prompt: str) -> str:
    chat = LlmChat(
        api_key=api_key,
        session_id=f"droyal-mockup-{name}",
        system_message="You are an expert cinematic luxury editorial photographer."
    )
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(modalities=["image", "text"])
    msg = UserMessage(text=prompt)
    text, images = await chat.send_message_multimodal_response(msg)
    if not images:
        return f"FAIL {name}: no images"
    img = images[0]
    out_path = os.path.join(OUT, f"{name}.png")
    with open(out_path, "wb") as f:
        f.write(base64.b64decode(img["data"]))
    return f"OK {name} -> {out_path}"


async def main():
    results = await asyncio.gather(*[gen_one(n, p) for n, p in PROMPTS])
    for r in results:
        print(r)


if __name__ == "__main__":
    asyncio.run(main())
