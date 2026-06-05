function showQQ() {
    var tip = document.getElementById('qq-tip');
    tip.classList.toggle('hidden');
}

// Add some sparkle effects on click
document.addEventListener('click', function(e) {
    var sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = (e.clientX - 10) + 'px';
    sparkle.style.top = (e.clientY - 10) + 'px';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'fadeOut 1s ease forwards';
    document.body.appendChild(sparkle);
    setTimeout(function() { sparkle.remove(); }, 1000);
});

// Add keyframe for sparkle
var style = document.createElement('style');
style.textContent = '@keyframes fadeOut { 0% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(2) translateY(-30px); } }';
document.head.appendChild(style);

console.log('🦊 嗷呜～霜降狐在此！蹭蹭你！');
