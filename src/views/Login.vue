<template>
  <div class="box">
    <div class="close">×</div>
    <div class="login">
      <span class="iconfont iconnew"></span>
    </div>
    <input type="text" placeholder="用户名/手机号码" class="username" />
    <input type="password" name id placeholder="密码" class="password" />
    <input type="button" value="登录" class="btn" />
    <!-- <span class="iconfont iconweixin"></span> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
.box {
  display: flex;
  flex-direction: column;
  background-color: rgba(242, 242, 242);
  padding: 0 10px;
  width: 100%;
  height: 543px;
}
.login {
  align-self: center;
}
.close {
  font-weight: lighter;
  color: #040404;

  font-size: 50px;
}
.iconnew {
  font-size: 150px;
  color: rgb(216, 30, 6);
}
input {
  font-size: 19px;
  border: 0;
  outline: none;
  border-bottom: 1.5px solid #757575;
  padding: 15px 0px;
  background-color: #f2f2f2;
}
.btn {
  border: 0;
  background-color: #cc3300;
  border-radius: 20px;
  margin-top: 50px;
  color: #fff;
}
</style>