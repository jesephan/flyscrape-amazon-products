export const config = {
    url: "https://www.amazon.com/s?k=Headphones",

    browser: true,
    headless: true,

    rate: 6,

    // cookies: "chrome",  // uncomment if still getting blocked
};

export default function ({ doc }) {
    const items = doc.find('[data-component-type="s-search-result"]');

    const products = items.map((item) => {
        const asin = item.attr("data-asin");

        // Title: h2 aria-label is most reliable
        const titleEl = item.find("h2");
        const title =
            titleEl.attr("aria-label") ||
            titleEl.find("span").first().text().trim() ||
            "N/A";

        const rawPrice = item.find(".a-price .a-offscreen").first().text().trim();
        const price = rawPrice
            ? rawPrice.replace(/^[A-Z]+\s+/, "$")
            : "N/A";

        const avg_rating =
            item.find(".a-icon-alt").first().text().trim() || "N/A";

        const rawReviews =
            item.find('a[aria-label*="ratings"]').attr("aria-label") ||
            item.find('a[aria-label*="rating"]').attr("aria-label") ||
            "";
        const review_count = rawReviews.replace(/\s*ratings?$/i, "").trim() || "N/A";

        return { asin, avg_rating, price, review_count, title };
    }).filter(p => p.asin && p.asin.length > 0);

    console.log(JSON.stringify(products, null, 2));

    return products;
}
