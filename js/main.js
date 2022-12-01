'use strict'

// チェックボタン・送信ボタンを取得
const triggerChecks = document.querySelectorAll('.check_input');
const signupButton  = document.getElementById('signup_button');

// 送信ボタンを無効化・無効状態のcssを適用(is-inactive)
signupButton.disabled = true;
signupButton.classList.add('is-inactive');

for (const triggerCheck of triggerChecks) {
  triggerCheck.addEventListener('change', function() {
    //チェックボックスがチェックされているか判定
    if(this.checked) {
      signupButton.disabled = false;
      signupButton.classList.remove('is-inactive');
      signupButton.classList.add('is-active');
    } else {
      signupButton.disabled = true;
      signupButton.classList.remove('is-active');
      signupButton.classList.add('is-inactive');
    }
  }, false);
};
  











/* 

チェックボックス（複数）のチェック状況を見て、送信ボタンを有効・無効化させる 

1.取得してくる要素
- type属性がcheckboxのinput要素を全て
- id属性がsignup_buttonのbutton要素

2.初期のボタンを無効にする

3.ボタンに無効のcssを適用

4.if文で条件分岐
- 

*/

