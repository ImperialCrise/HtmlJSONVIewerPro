document.getElementById('displayButton').addEventListener('click', displayJSON);
document.getElementById('exportButton').addEventListener('click', exportJSON);
document.getElementById('decodedJsonInput').addEventListener('input', updateJSON);

function displayJSON() {
    var encodedJsonInput = document.getElementById('jsonInput').value;
    var decodedJsonInput = htmlspecialchars_decode(encodedJsonInput);
    var wrapper = document.getElementById('jsonTree');
    var decodedJsonTextInput = document.getElementById('decodedJsonInput');

    try {
        var jsonObj = JSON.parse(decodedJsonInput);
        wrapper.innerHTML = '';
        decodedJsonTextInput.value = JSON.stringify(jsonObj, null, " ");
        decodedJsonTextInput.readOnly = false;

        jsonTree.create(jsonObj, wrapper);

    } catch (error) {
        wrapper.innerHTML = 'Error: the JSON is invalid.';
    }
}

function updateJSON() {
    var decodedJsonTextInput = document.getElementById('decodedJsonInput');
    var wrapper = document.getElementById('jsonTree');
    wrapper.innerHTML = '';
    try {
        var jsonObj = JSON.parse(decodedJsonTextInput.value);

        decodedJsonTextInput.value = JSON.stringify(jsonObj, null, 2);
        jsonTree.create(jsonObj, wrapper);

    } catch (error) {
        console.log(error);
    }
}

function exportJSON() {
    var decodedJsonTextInput = document.getElementById('decodedJsonInput');
    var jsonText = decodedJsonTextInput.value;

    try {
        var jsonObj = JSON.parse(jsonText);
        var encodedJsonString = JSON.stringify(jsonObj);
        encodedJsonString = htmlspecialchars(encodedJsonString);

        // Copier le JSON encodé dans le presse-papiers
        navigator.clipboard.writeText(encodedJsonString).then(function() {
            alert('Encoded JSON copied to clipboard!');
        }, function() {
            alert('Unable to copy encoded JSON to clipboard.');
        });
    } catch (error) {
         alert('Error: the JSON is invalid.');
    }
}

function htmlspecialchars(text) {
    var replacements = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function (match) {
        return replacements[match];
    });
}

function htmlspecialchars_decode(text) {
    var replacements = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#039;': "'"
    };
    return text.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, function (match) {
        return replacements[match];
    });
}
