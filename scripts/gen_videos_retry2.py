"""Retry 2 failed videos with moderation-safe prompts."""
import os, time
from concurrent.futures import ThreadPoolExecutor
from dotenv import load_dotenv
from emergentintegrations.llm.openai.video_generation import OpenAIVideoGeneration

load_dotenv("/app/backend/.env")
api_key = os.environ['EMERGENT_LLM_KEY']

BASE = """Cinematic scientific micro-photography visualization. Warm cream and gold palette.
NO blue, NO cold tones. Slow motion medical educational animation.
NO text, NO logos, NO labels, NO watermarks. NO human skin shown (only abstract cells)."""

VIDEOS = [
    ("explainer-ultrasound",
     f"""Abstract scientific animation: concentric sound wave ripples radiating through a warm golden fluid medium.
Small round golden spheres (representing fat cells) vibrate from the sound waves, form tiny bubbles inside, 
and gradually break apart into liquid droplets that flow away.
Pure scientific abstract visualization in warm cream-gold palette, no skin or body shown.
Slow motion dreamy. {BASE}"""),
    
    ("explainer-vacuum-lift",
     f"""Abstract scientific animation: a circular glass vessel filled with warm cream liquid.
From above, gentle suction creates a visible upward flow — the liquid rises gracefully into the dome.
Golden particles swirl in the flow showing activation and energy movement.
Pure abstract scientific visualization, no body or skin shown, only the glass dome and warm golden liquid flow.
Slow motion, hypnotic, elegant. {BASE}"""),
]


def gen_one(item):
    name, prompt = item
    try:
        gen = OpenAIVideoGeneration(api_key=api_key)
        video_bytes = gen.text_to_video(prompt=prompt, model="sora-2", size="1280x720", duration=4, max_wait_time=600)
        if not video_bytes:
            print(f"[{name}] FAIL: no bytes")
            return False
        out = f"/app/home-3d/mockups/{name}.mp4"
        gen.save_video(video_bytes, out)
        print(f"[{name}] OK -> {out}")
        return True
    except Exception as e:
        print(f"[{name}] ERR: {e}")
        return False


def main():
    start = time.time()
    with ThreadPoolExecutor(max_workers=2) as ex:
        list(ex.map(gen_one, VIDEOS))
    print(f"\nDone in {time.time()-start:.1f}s")


if __name__ == "__main__":
    main()
