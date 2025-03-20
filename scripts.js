const contents = {
    'basic-types': '',
    'io': '',
    'variables': '',
    'operators': '',
    'conditions': '',
    'loops': '',
    'data-structures': '',
    'exceptions': '',
    'error-handling': '',
    'custom-functions': '',
    'task-automation': '',
    'data-visualization': '',
    'real-time-data': ''
};

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            toggleActiveCard(this);
        });
    });
    highlightComments();
});

document.fonts.ready.then(function() {
    // 字体加载完成后执行
    document.body.classList.add('fonts-loaded');
}).catch(function(err) {
    console.warn('字体加载失败:', err);
    // 使用回退字体
    document.body.classList.add('fonts-failed');
});

function toggleActiveCard(selectedCard) {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        if (card !== selectedCard) {
            card.classList.remove('active');
        }
    });
    
    selectedCard.classList.toggle('active');
}

function openCard(card, topic) {
    const contentDiv = card.querySelector('.content');
    card.classList.add('active');
    
    if (contents[topic]) {
        contentDiv.innerHTML = contents[topic];
        requestAnimationFrame(() => {
            contentDiv.style.maxHeight = `${contentDiv.scrollHeight}px`;
            contentDiv.style.opacity = '1';
            contentDiv.style.padding = '1.5rem';
        });
    }
}

function closeCard(card) {
    const contentDiv = card.querySelector('.content');
    card.classList.remove('active');
    contentDiv.style.maxHeight = '0';
    contentDiv.style.opacity = '0';
    contentDiv.style.padding = '0';
}

function closeAllCards() {
    document.querySelectorAll('.card.active').forEach(closeCard);
}

function highlightComments() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const content = block.innerHTML;
        const highlightedContent = content.replace(
            /(#.+)$/gm,
            '<span class="comment">$1</span>'
        );
        block.innerHTML = highlightedContent;
    });
}
