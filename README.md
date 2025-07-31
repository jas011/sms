# SMS Notification Utility

This tool formats Indian phone numbers, generates SMS links with a predefined message and expiry date, and provides clipboard support to copy the message body. It is intended for use in cases like sending insurance policy expiry reminders via SMS.

---

## Features

- Formats plain numbers (one per line) into `+91XXXXXXXXXX,` format
- Converts a given expiry date to a human-readable format (e.g., "31 July 2025")
- Generates an SMS link prefilled with recipient numbers and a custom message
- Provides clipboard copy functionality for the message body

---

## How to Use

1. **Input Mobile Numbers**
   - Provide numbers in a multiline input (one per line).
   - Call `enterv(inputText)` to format them.

2. **Set Expiry Date**
   - Call `edate(dateString)` to convert and display the expiry date.

3. **Copy Message**
   - Call `copy()` to copy the message content from a predefined container.

---

## HTML Element Requirements

```html
<input type="text" id="search" placeholder="Enter numbers" />
<div id="expdate"></div>
<div id="vale">Your message here</div>
<a id="sms">Send SMS</a>

