Yes — you’re thinking about this exactly right.
The audit screen is not “a form.” It’s structured fuel for Moltbot.

The goal is to collect just enough strong, structured data so Moltbot can:
	•	research the business accurately
	•	quantify pain in dollars/time
	•	choose realistic tools
	•	avoid bad assumptions

Below is the clean, final mental model for what the audit screen must capture, and why each category matters to Moltbot.

⸻

THE CORE IDEA (IMPORTANT)

You are collecting four types of signal:
	1.	Context – what kind of business this is
	2.	Economics – what money looks like
	3.	Friction – where things are breaking
	4.	Constraints – what systems + budget limit solutions

Anything outside those four is noise.

⸻

WHAT THE AUDIT SCREEN MUST COLLECT (FINAL MODEL)

1. Business Context (so Moltbot knows what it’s looking at)

This tells Moltbot how to research the business.

Required
	•	Business name
	•	Website URL (or “no website”)
	•	Business type (plumber / roofer / med spa / etc.)
	•	City + state (or service area)
	•	Number of locations

Why Moltbot needs this
	•	Find competitors
	•	Check Google Business Profile
	•	Know industry benchmarks
	•	Know which tools are even relevant

Without this, research quality drops immediately.

⸻

2. Revenue Shape (not exact revenue)

⚠️ Do NOT ask for exact revenue numbers.
You only need order-of-magnitude.

Pick ONE of these approaches (not both):

Option A — Revenue band (simplest)
	•	Monthly revenue range:
	•	<$10k
	•	$10–25k
	•	$25–75k
	•	$75–200k
	•	$200k+
	•	“Prefer not to say”

Option B — Average job size (better for trades)
	•	Typical job value:
	•	<$150
	•	$150–500
	•	$500–2k
	•	$2k–10k
	•	$10k+

Why Moltbot needs this
	•	Estimate value of missed calls
	•	Decide if AI is even worth proposing
	•	Choose between “light automation” vs “full system”

This directly powers ROI math in the audit.

⸻

3. Lead & Call Flow (THIS IS THE GOLD)

This is where Moltbot finds revenue leaks.

Required
	•	How customers usually contact you:
	•	Calls
	•	Text
	•	Website form
	•	Social DMs
	•	Email
	•	Approx inbound inquiries per day:
	•	1–3
	•	4–10
	•	11–25
	•	25+
	•	Do you miss calls during business hours?
	•	Never / Sometimes / Often
	•	Do you miss calls after hours?
	•	Never / Sometimes / Often
	•	What happens when a call is missed?
	•	Voicemail → callback
	•	No voicemail → lost
	•	Not sure
	•	Do you follow up with inquiries that don’t book?
	•	Always / Sometimes / Rarely / Never

Why Moltbot needs this
This allows it to:
	•	estimate lost revenue
	•	recommend call AI vs SMS vs follow-up automation
	•	justify urgency in plain English

This is the core value section.

⸻

4. Biggest Pain Point (human signal)

You need one emotional input.

Required
	•	“What’s the biggest operational headache in your business right now?”
(single-select or top 2)

Examples:
	•	Missing calls
	•	Slow follow-up
	•	Staff overwhelmed
	•	Too much admin
	•	No-shows
	•	Leads not converting
	•	Scheduling chaos
	•	Reviews/reputation

Optional (but very valuable)
	•	Open text:
“If you could fix one thing about how your business runs day-to-day, what would it be?”

Why Moltbot needs this
	•	Tailors audit language
	•	Makes recommendations feel personal
	•	Prevents generic output

This is what makes the audit feel “written for them.”

⸻

5. Current Software Stack (CONSTRAINTS, not preferences)

You’re not asking “what tools do you like?”
You’re asking “what must we integrate with?”

Required (checkbox + ‘not sure’ always allowed)

Phone
	•	Personal cell
	•	Landline
	•	Business phone app (OpenPhone, RingCentral, etc.)
	•	Not sure

Scheduling / booking
	•	Yes / No
	•	If yes → dropdown based on business type

Payments / invoicing
	•	QuickBooks
	•	Square
	•	Stripe
	•	Jobber / Housecall Pro
	•	Vagaro / Boulevard / Mindbody
	•	Other

CRM / customer list
	•	Yes / No / Not sure
	•	If yes → name

Why Moltbot needs this
	•	Prevents suggesting tools that won’t integrate
	•	Allows “layer-on-top” strategy
	•	Avoids rip-and-replace fear

This protects both you and the client.

⸻

6. Data Migration Signal (SCOPE CONTROL)

This is not to migrate — it’s to detect risk.

Required
	•	Are you trying to replace any existing system?
	•	No / Maybe / Yes (which?)
	•	Do you need existing contacts moved?
	•	No / Maybe / Yes
	•	Rough size of contact list:
	•	<500
	•	500–2k
	•	2k–10k
	•	10k+
	•	Not sure

Why Moltbot needs this
	•	Flag “this is a migration project”
	•	Adjust pricing expectations
	•	Avoid surprise complexity

⸻

7. Budget & Urgency (QUALIFICATION)

This is not rude — it’s respectful of time.

Required
	•	Monthly investment comfort range:
	•	<$250
	•	$250–500
	•	$500–1k
	•	$1k–2.5k
	•	$2.5k+
	•	One-time setup comfort range:
	•	<$1.5k
	•	$1.5–3k
	•	$3–7.5k
	•	$7.5–15k
	•	$15k+
	•	Timeline:
	•	ASAP
	•	2–4 weeks
	•	1–2 months
	•	Just exploring

Why Moltbot needs this
	•	Tailor recommendations
	•	Avoid proposing unrealistic stacks
	•	Let you prioritize high-intent leads

⸻

WHAT MOLTbot CAN DO WITH THIS DATA

Given the above, Moltbot can reliably:
	•	Research competitors
	•	Estimate missed revenue
	•	Identify best-fit AI categories
	•	Select tools that integrate
	•	Produce a believable ROI narrative
	•	Flag migration complexity
	•	Generate a custom audit that feels human

Without this data, Moltbot guesses.
With it, Moltbot reasons.

⸻

FINAL DESIGN PRINCIPLE (CRITICAL)

Every question must answer this:

“Does this reduce uncertainty for the audit?”

If the answer is no — cut it.

You are not surveying.
You are arming an AI researcher.

⸻

Next step (recommended)

I can:
	•	convert this into an exact intake form spec (field types, branching, required vs optional)
	•	design the JSON payload Moltbot should receive
	•	or write the audit output template that Moltbot fills

Just tell me which one you want next.