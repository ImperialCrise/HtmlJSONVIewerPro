# Viewing and editing JSON

This project consists of an online tool for viewing and editing encoded JSON using PHP's `htmlspecialchars` function. The tool displays the JSON tree and allows the user to edit each JSON element.

## Features

- The user can enter encoded JSON in a first textarea.
- The JSON is decoded and displayed in a second textarea.
- The JSON tree is generated and displayed alongside the textareas.
- The user can edit the decoded JSON in the second textarea, which updates the JSON tree displayed.
- When the user clicks on the "Export encoded JSON" button, the decoded JSON is re-encoded with `htmlspecialchars` and copied to the clipboard.

## Technologies used

- HTML
- CSS
- JavaScript
- jsonTree (library for JSON tree generation)

## Usage

1. Clone this repo on your local machine.
2. Open the `index.html` file in your web browser.
3. Enter the JSON encoded in the first textarea.
4. Click on the "Show JSON tree" button to view the decoded JSON and the JSON tree.
5. You can edit the decoded JSON in the second textarea. Modifications will be reflected in the displayed JSON tree.
6. When you're ready to export the encoded JSON, click on the "Export encoded JSON" button. The encoded JSON will be copied to the clipboard.

OR you can access these files directly on this [remote site](https://datas.privilegedlab.com/json/).

Feel free to customize the CSS design or add additional functionality as required.

## Author

This project was created by iCrise ([My GitHub](https://github.com/ImperialCrise)).
