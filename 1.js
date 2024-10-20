// 获取登录失败提示框元素
const loginFailurePopup = document.getElementById('loginFailurePopup');

function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  if (validUsers[username] === password) {
    window.location.href = 'https://space.bilibili.com/3546587571686054?spm_id_from=333.1007.0.0';
  } else {
    // 显示登录失败提示框
    loginFailurePopup.style.display = 'block';
    // 3 秒后隐藏提示框
    setTimeout(() => {
      loginFailurePopup.style.display = 'none';
    }, 3000); 
  }
}