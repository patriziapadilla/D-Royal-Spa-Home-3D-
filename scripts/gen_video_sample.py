"""Generate sample Sora 2 video — Lipo Laser explainer (how it works inside skin)."""
import os, sys
from dotenv import load_dotenv

sys.path.insert(0, os.path.abspath(''))
from emergentintegrations.llm.openai.video_generation import OpenAIVideoGeneration

load_dotenv("/app/backend/.env")

PROMPT = """Cinematic medical visualization, scientific micro-photography style.
Cross-section anatomical view of human skin layers in warm cream and gold palette.
Visible from top to bottom: epidermis (outer skin), dermis, and below that a layer of round yellow-cream fat cells in the hypodermis.
Bright RED LOW-LEVEL LASER LIGHT BEAMS (650nm wavelength) gently penetrate from above through the skin layers, 
reaching the fat cells. The red laser light makes the round fat cells gradually shrink and release a soft golden liquid 
(triglycerides). The released golden droplets flow toward green-gold lymphatic vessels visible in the dermis layer 
and gently drain away through the lymphatic system.
Slow motion, dreamy hyperrealistic medical animation, soft warm volumetric lighting,
antique gold and cream background palette, subtle warm mist particles floating.
NO blue, NO cold tones, only warm royal-gentle palette.
NO text, NO logos, NO labels, pure cinematic visualization.
Smooth professional medical illustration animation, like a high-end aesthetic medicine educational reel."""

def main():
    print("Starting Sora 2 generation (Lipo Laser explainer)...")
    video_gen = OpenAIVideoGeneration(api_key=os.environ['EMERGENT_LLM_KEY'])
    video_bytes = video_gen.text_to_video(
        prompt=PROMPT,
        model="sora-2",
        size="1280x720",
        duration=4,
        max_wait_time=600
    )
    if video_bytes:
        out = "/app/home-3d/mockups/explainer-lipo-laser.mp4"
        video_gen.save_video(video_bytes, out)
        print(f"OK -> {out}")
        print(f"size: {os.path.getsize(out)} bytes")
    else:
        print("FAIL: no video")

if __name__ == "__main__":
    main()
