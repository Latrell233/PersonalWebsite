// 例如，给"关于我"、"项目展示"、"联系方式"添加点击展开/收起的功能
document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', function() {
        this.querySelector('p').classList.toggle('expanded');
    });
});