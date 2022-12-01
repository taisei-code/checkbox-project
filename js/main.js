'use strict'

const triggerChecks = document.querySelectorAll('.check_input');
const signupButton  = document.getElementById('signup_button');

signupButton.disabled = true;
signupButton.classList.add('is-inactive');

Array.from(triggerChecks, el => {
  el.addEventListener("change", function () {

      if (getCheckedLength() === triggerChecks.length) {
          signupButton.disabled = false;
          signupButton.classList.remove('is-inactive');
          signupButton.classList.add('is-active');
      } else {
          signupButton.disabled = true;
          signupButton.classList.remove('is-active');
          signupButton.classList.add('is-inactive');
      }
  })
})

  const getCheckedLength = () => document.querySelectorAll('.check_input:checked').length;











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

