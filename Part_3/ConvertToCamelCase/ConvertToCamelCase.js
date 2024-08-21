document.getElementById('convert').addEventListener('click', function() {
    const textarea = document.getElementById('input');
    const inputText = textarea.value.trim();
    const lines = inputText.split('\n');

    lines.forEach((line, index) => {
        const camelCase = toCamelCase(line);
        const checks = '✅'.repeat(index + 1);
        console.log(`${camelCase} ${checks}`);
    });
});

function toCamelCase(str) {
    return str
        .toLowerCase()
        .split('_')
        .map((word, index) => index === 0 ? word : capitalize(word))
        .join('');
}


function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
