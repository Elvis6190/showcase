const timeoutDuration = 5000; // 5 seconds in milliseconds
let timeout;
let accumulatedTime = parseInt(localStorage.getItem('accumulatedTime')) || 0;

function showTimeoutMessage() {
    document.getElementById('timeoutMessage').style.display = 'block';
}

function redirectToLogin() {
    localStorage.removeItem('accumulatedTime'); // Clear accumulated time on redirect
    window.location.href = 'index.html';
}

function resetTimeout() {
    clearTimeout(timeout);
    document.getElementById('timeoutMessage').style.display = 'none'; // Hide message on activity
    
    // Reset accumulated time
    accumulatedTime = parseInt(localStorage.getItem('accumulatedTime')) || 0;

    // Start a new timeout
    timeout = setTimeout(() => {
        accumulatedTime += timeoutDuration;
        localStorage.setItem('accumulatedTime', accumulatedTime);

        if (accumulatedTime >= timeoutDuration) {
            showTimeoutMessage();
        }
    }, timeoutDuration);
}

// Check if accumulated time has reached the timeout threshold
if (accumulatedTime >= timeoutDuration) {
    showTimeoutMessage();
}

window.onload = resetTimeout;
window.onmousemove = resetTimeout;
window.onkeypress = resetTimeout;