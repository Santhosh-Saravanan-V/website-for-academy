
const ai = require('ai');

console.log('Keys in ai:', Object.keys(ai));

if (ai.StreamTextResult) {
    console.log('StreamTextResult prototype keys:', Object.getOwnPropertyNames(ai.StreamTextResult.prototype));
} else {
    console.log('StreamTextResult is not exported directly');
}

if (ai.streamText) {
    console.log('streamText type:', typeof ai.streamText);
}

try {
    // Attempt to invoke streamText to see what it returns (might fail without args)
    // We just want to inspect the return object structure if possible, but it returns a promise usually?
    // Let's just check if we can see the result structure from source or something.
} catch (e) { }
