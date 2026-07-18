import os
import json
from pathlib import Path
from dotenv import load_dotenv
from apify_client import ApifyClient

def scrape_instagram_posts():
    # Load environment variables from .env
    load_dotenv()
    
    # Retrieve the Apify API token
    api_token = os.getenv("APIFY_API_TOKEN")
    if not api_token:
        print("Error: APIFY_API_TOKEN environment variable not found.")
        print("Please create a '.env' file in the root of this project and add:")
        print("APIFY_API_TOKEN=your_apify_api_token_here")
        return
        
    client = ApifyClient(api_token)
    
    instagram_url = "https://www.instagram.com/medellin_galeria_tour/"
    print(f"Starting Apify scraper for: {instagram_url}")
    
    # Configure input for apify/instagram-scraper
    run_input = {
        "directUrls": [instagram_url],
        "resultsType": "posts",
        "resultsLimit": 100,
    }
    
    try:
        # Run the actor and wait for it to finish
        run = client.actor("apify/instagram-scraper").call(run_input=run_input)
        
        print("Scraper run completed. Fetching items from dataset...")
        
        # Retrieve all items from the default dataset
        items = list(client.dataset(run["defaultDatasetId"]).iterate_items())
        
        # Ensure directories exist
        raw_dir = Path("data/raw")
        raw_dir.mkdir(parents=True, exist_ok=True)
        
        # Save raw data
        raw_path = raw_dir / "raw_posts.json"
        with open(raw_path, "w", encoding="utf-8") as f:
            json.dump(items, f, ensure_ascii=False, indent=2)
        print(f"Saved {len(items)} raw posts to: {raw_path}")
        
        # Separate/clean the data
        clean_posts = []
        for item in items:
            # Safely extract key post details
            post_data = {
                "id": item.get("id"),
                "shortCode": item.get("shortCode"),
                "type": item.get("type"),
                "url": item.get("url"),
                "caption": item.get("caption"),
                "commentsCount": item.get("commentsCount"),
                "likesCount": item.get("likesCount"),
                "timestamp": item.get("timestamp"),
                "dimensionsHeight": item.get("dimensionsHeight"),
                "dimensionsWidth": item.get("dimensionsWidth"),
                "displayUrl": item.get("displayUrl"),
                "images": item.get("images", []),
                "videoUrl": item.get("videoUrl"),
                "isVideo": item.get("isVideo", False),
                "viewCount": item.get("videoViewCount", 0),
            }
            clean_posts.append(post_data)
            
        clean_path = Path("data") / "posts_clean.json"
        with open(clean_path, "w", encoding="utf-8") as f:
            json.dump(clean_posts, f, ensure_ascii=False, indent=2)
        print(f"Saved cleaned posts to: {clean_path}")
        
    except Exception as e:
        print(f"An error occurred during scraping: {e}")

if __name__ == "__main__":
    scrape_instagram_posts()
