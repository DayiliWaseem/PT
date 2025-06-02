# PT Checklist Extension

A Firefox browser extension to help penetration testers track and manage web application security checklists efficiently.

## Features

* ✅ Display categorized PT (Penetration Testing) checklist items
* 📝 Each item includes a description with testing instructions
* 🔍 Small built-in search bar to filter checklist items by keyword
* 📌 Supports saving progress using browser local storage
* 🧠 Designed for usability and clarity
* 🔒 No external API calls or data collection

## Installation (Temporary for Development)

1. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`
2. Click on **"Load Temporary Add-on..."**
3. Select the `manifest.json` file from the project folder

## Folder Structure

```bash
pt-checklist-extension/
├── manifest.json
├── popup.html
├── popup.js
├── style.css
├── checklist_detailed.json
└── icon.png
```

## JSON Structure Example

```json
{
  "categories": {
    "Authentication": [
      {
        "name": "Testing for default credentials",
        "description": "Test for default usernames and passwords across the app."
      }
    ]
  }
}
```

## How to Add New Sections

1. Open `checklist_detailed.json`
2. Add a new key-value pair under `categories`:

```json
"New Category": [
  {
    "name": "New Test",
    "description": "Test description."
  }
]
```

3. Save and reload the extension in Firefox.

## License

This project is open-source and available under the MIT License.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

Made with 💻 for easier and organized penetration testing.
