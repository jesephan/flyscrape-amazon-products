# Amazon Product Scraper

Scrapes product listings from Amazon search results using [flyscrape](https://github.com/philippta/flyscrape).

## Installation

Install flyscrape by following the instructions here:
👉 https://github.com/philippta/flyscrape?tab=readme-ov-file#installation

## Usage
```bash
flyscrape run amazon.listings.js
```

## Output Format

```json
[
  {
    "asin": "B08MVGF24M",
    "avg_rating": "4.7 out of 5 stars",
    "price": "$278.00",
    "review_count": "34,968",
    "title": "Sony WH-1000XM4 Wireless Premium Noise Canceling Headphones"
  }
]
```

## Notes

- Uses headless browser mode to bypass Amazon's bot detection.
- If you still get blocked, uncomment `cookies: "chrome"` in the config to use your local browser session.
