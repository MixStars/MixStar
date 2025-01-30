// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 获取角色选择卡片
    const teacherCard = document.querySelector('.teacher-card');
    const studentCard = document.querySelector('.student-card');

    // 添加点击事件
    if (teacherCard) {
        teacherCard.addEventListener('click', function() {
            window.location.href = 'https://mixstars.github.io/MixStar/data/index/teacher.html';
        });
    }

    if (studentCard) {
        studentCard.addEventListener('click', function() {
            window.location.href = 'https://mixstars.github.io/MixStar/data/index/student.html';
        });
    }

    // 添加鼠标悬停效果
    const roleCards = document.querySelectorAll('.role-card');
    roleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });

    // 论坛页面功能
    const postBtn = document.getElementById('post-btn');
    const postsContainer = document.querySelector('.posts');

    if (postBtn) {
        postBtn.addEventListener('click', function() {
            const postInput = document.getElementById('post-input');
            const postContent = postInput.value.trim();

            if (postContent) {
                // 创建新帖子
                const newPost = document.createElement('div');
                newPost.classList.add('post');

                newPost.innerHTML = `
                    <div class="post-header">
                        <img src="images/avatar.jpg" alt="用户头像" class="avatar">
                        <span class="username">当前用户</span>
                    </div>
                    <div class="post-content">
                        ${postContent}
                    </div>
                    <div class="post-actions">
                        <button class="like-btn">点赞</button>
                        <button class="comment-btn">评论</button>
                    </div>
                `;

                // 插入到帖子列表顶部
                postsContainer.insertBefore(newPost, postsContainer.firstChild);

                // 清空输入框
                postInput.value = '';
            }
        });
    }


    // 点赞和评论按钮交互效果
    postsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('like-btn')) {
            event.target.textContent = '已点赞';
            event.target.style.backgroundColor = '#2ecc71';
        }

        if (event.target.classList.contains('comment-btn')) {
            alert('评论功能暂未实现');
        }
    });
});
