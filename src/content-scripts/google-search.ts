import { Dom, IndentLogger, Options } from "../modules";

const dom = new Dom();
const logger = new IndentLogger(true);
const options = new Options();

async function apply()
{
    const googleSearchPrimaryBackgroundColor = await options.getPrimaryBackgroundColor();
    const googleSearchSecondaryBackgroundColor = await options.getSecondaryBackgroundColor();

    const bgColorPrimaryCss   = `{ background-color: ${googleSearchPrimaryBackgroundColor} !important; }`;
    const bgColorSecondaryCss = `{ background-color: ${googleSearchSecondaryBackgroundColor} !important; }`;
    const bgColorUnsetCss     = `{ background-color: unset !important; }`;

    // Create a new stylesheet object and add rules to it
    const ss = document.createElement("style");
    document.body.appendChild(ss);

    ss.sheet?.insertRule(`body.srp, body ${bgColorPrimaryCss}`, ss.sheet.cssRules.length);                                                                               // body
    ss.sheet?.insertRule(`#searchform > div ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                                              // header
    ss.sheet?.insertRule(`#appbar ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                                                        // number of results
    ss.sheet?.insertRule(`div.g ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                                                          // search results
    ss.sheet?.insertRule(`form > div > div > div:has(textarea) ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                       // search box
    ss.sheet?.insertRule(`form > div > div > div > div:has(ul) ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                       // search box dropdown
    ss.sheet?.insertRule(`div[role="navigation"] a ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                                       // navigation links
    ss.sheet?.insertRule(`div[role="navigation"] a:hover ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                             // navigation links
    ss.sheet?.insertRule(`div[aria-label="Settings"]:hover ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                           // settings cog
    ss.sheet?.insertRule(`div[aria-label="Settings"] > div ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                           // settings cog text
    ss.sheet?.insertRule(`div[aria-label="Google apps"] ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                              // Google apps
    ss.sheet?.insertRule(`g-menu ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                                                     // dropdown menus
    ss.sheet?.insertRule(`#uddia_1 g-popup > div[role="button"] > div:hover ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                          // All filters hover
    ss.sheet?.insertRule(`#hdtb-tls:hover ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                                            // Tools hover
    ss.sheet?.insertRule(`#abss-dropdown_1:hover ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                                     // SafeSearch hover
    ss.sheet?.insertRule(`.g-blk > div ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                                                   // See results about
    ss.sheet?.insertRule(`div[data-attrid="VisualDigestWebResult"] ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                   // Other information
    ss.sheet?.insertRule(`div:has(> div > span > span > a >g-inner-card) ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                             // Other information
    ss.sheet?.insertRule(`div[aria-label="About"] > div > div ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                            // Other information
    ss.sheet?.insertRule(`div[aria-label="About"] > div > div > div ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                      // Other information
    ss.sheet?.insertRule(`g-inner-card ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                                                   // Twitter
    ss.sheet?.insertRule(`g-inner-card > div > div > div > div ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                           // Twitter
    ss.sheet?.insertRule(`#sports-app > div > div > div.imso-hov:hover ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                               // Sports
    ss.sheet?.insertRule(`div[data-entityname="Match List Summary"] td.imso-hov > div.imso-hov:hover ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                 // Sports
    ss.sheet?.insertRule(`div[data-entityname="Match Header"] div.imso-hov:hover ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                     // Sports
    ss.sheet?.insertRule(`div.kp-wholepage > div:has(div.osrp-blk) ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                       // Sports
    ss.sheet?.insertRule(`div:has(>g-scrolling-carousel) ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                                 // scrolling carousel
    ss.sheet?.insertRule(`g-scrolling-carousel div[role="listitem"] > div ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                // scrolling carousel
    ss.sheet?.insertRule(`g-fab ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                                                      // left/right arrow
    ss.sheet?.insertRule(`a > div > div > div:has(> div > span > svg) ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                // left/right arrow
    ss.sheet?.insertRule(`#botstuff a:has(> div > b) ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                                 // related searches
    ss.sheet?.insertRule(`#bres a > div[role="link"] > div ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                           // related searches
    ss.sheet?.insertRule(`#bres > div:nth-child(3) > div > div > div > div:nth-child(2) ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                  // related searches
    ss.sheet?.insertRule(`a:has(> div >b) ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                                            // related searches
    ss.sheet?.insertRule(`div:has(> div > div[role="heading"]) + div ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                     // related searches
    ss.sheet?.insertRule(`div:has(> div > div[role="heading"]) + div > div > div > div > a[href^="/search"]:has(div) ${bgColorSecondaryCss}`, ss.sheet.cssRules.length); // related searches
    ss.sheet?.insertRule(`h3 > div:has(span) ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                                         // more results button
    ss.sheet?.insertRule(`h3 > div:has(span):hover ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                                   // more results button
    ss.sheet?.insertRule(`g-section-with-header hr + div:has(> span > svg) ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                           // more news button
    ss.sheet?.insertRule(`g-section-with-header hr + div:has(> span > svg):hover ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                     // more news button
    ss.sheet?.insertRule(`div:has(> a[data-ti="overview"] > g-more-link) ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                 // more about button
    ss.sheet?.insertRule(`div > a[data-ti="overview"] > g-more-link > div ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                            // more about button
    ss.sheet?.insertRule(`div > a[data-ti="Songs"] > div > g-more-link > div ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                         // Songs View more button
    ss.sheet?.insertRule(`div > a[data-ti="TvEpisodeGuide"] > div > g-more-link > div ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                // Songs View more button
    ss.sheet?.insertRule(`g-more-link > div[role="button"] ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                           // More audience reviews button
    ss.sheet?.insertRule(`div.kp-wholepage > div > div > a[ping] ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                         // Claim this knowledge panel
    ss.sheet?.insertRule(`div[role="complementary"] > div > div > div > div > div > a[ping] ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                              // Claim this knowledge panel
    ss.sheet?.insertRule(`div[role="button"] > div > div:has(>div>span>svg) ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                              // Already watched
    ss.sheet?.insertRule(`div[role="button"] > div > div:has(>div>span>span>svg) ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                         // Want to watch
    ss.sheet?.insertRule(`g-popup > div > div > div > div ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                                // Thumbs up/down buttons
    ss.sheet?.insertRule(`g-dropdown-menu > g-popup > div > div ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                          // Watch buttons
    ss.sheet?.insertRule(`div[data-attrid] > div > div > a > div > div > div:has(div) ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                    // Watch buttons
    ss.sheet?.insertRule(`g-expandable-content > span > div > a > div > div > div:has(>div) ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                              // Watch buttons
    ss.sheet?.insertRule(`g-expandable-content > span > div > g-more-link > div ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                      // Show more/less buttons
    ss.sheet?.insertRule(`div[role="listitem"] > a[title] ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                                // Cast
    ss.sheet?.insertRule(`div > a > div > hr + div ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                                   // see more button
    ss.sheet?.insertRule(`div > a > div > hr + div:hover ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                             // see more button
    ss.sheet?.insertRule(`g-more-link > a > div ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                                      // View all button
    ss.sheet?.insertRule(`g-more-link > a > div:hover ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                                // View all button
    ss.sheet?.insertRule(`a[role="button"] > div ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                                         // context-specific ovals
    ss.sheet?.insertRule(`a[role="button"] > div:hover ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                               // context-specific ovals
    ss.sheet?.insertRule(`div[role="tablist"] > span ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                                 // context-specific ovals
    ss.sheet?.insertRule(`div[role="tablist"] > span > span ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                          // context-specific ovals
    ss.sheet?.insertRule(`g-raised-button ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                                                // context-specific ovals
    ss.sheet?.insertRule(`g-inline-toggler > div > span > div ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                            // up/down arrow buttons
    ss.sheet?.insertRule(`g-inline-toggler > div > span > div:hover ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                  // up/down arrow buttons
    ss.sheet?.insertRule(`.kp-wholepage-osrp > div > span ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                            // up/down arrow buttons
    ss.sheet?.insertRule(`.kp-wholepage-osrp > div > span > span ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                     // up/down arrow buttons
    ss.sheet?.insertRule(`#fbar ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                                                      // footer
    ss.sheet?.insertRule(`footer ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);                                                                                     // footer
    ss.sheet?.insertRule(`g-immersive-footer ${bgColorUnsetCss}`, ss.sheet.cssRules.length);                                                                             // footer
}

// apply().then(() =>
// {
//     logger.info("google-search.js content script loaded!");
// });

logger.info("google-search.js content script loaded!");

// ================================================================================
// NOTES
// ================================================================================
// - This is meant to be illustrative of capabilities and certainly not exhaustive,
//   and yes, you could almost certainly use better selectors.  Again, this is a
//   template from which to start a new extension - nothing more, nothing less.
//   I only included this file as a reference for myself.
//
// - this will return all elements that have a background color set:
// Array.from(document.querySelectorAll('body *')).filter((el) => el instanceof HTMLElement ? el.style.backgroundColor != '' || getComputedStyle(el).backgroundColor != 'rgba(0, 0, 0, 0)' : false);
//
// - query string parameters
// Images   -->  tbm=isch
// Books    -->  tbm=bks
// News     -->  tbm=nws
// Shopping -->  tbm=shop
// Videos   -->  tbm=vid
// ==============================================================================
