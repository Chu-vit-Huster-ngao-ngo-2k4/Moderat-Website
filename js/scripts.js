const buttons = document.querySelectorAll('.playButton');
const iframes = document.querySelectorAll('.song');

buttons.forEach((button, index) => {
    
    button.addEventListener('click', () => {
        
        const iframe = iframes[index];

        // Gửi thông điệp play đến iframe
        const soundCloudPlayer = iframe.contentWindow;
        soundCloudPlayer.postMessage(JSON.stringify({ method: 'play' }), '*');

    });

});