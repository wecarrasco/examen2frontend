<template lang="html">
  <div class="wrapper">
    <div class="form-signin">
      <h2 class="form-signin-heading">Please login</h2>
      <input v-model="user.username" id="username" type="text" class="form-control" name="username" placeholder="Username" required="" autofocus="" />
      <input v-model="user.password" id="password" type="password" class="form-control" name="password" placeholder="Password" required=""/>
      <button type="button" class="btn btn-lg btn-primary btn-block" v-on:click="login" >Login</button>
      <img src="static/kim.png" alt="">
    </div>
  </div>
</template>

<script>
// import sweetAlert from 'sweetalert'

export default {
  data(){
    return{
      user:{
        username:"",
        password:""
      }
    }
  },mounted(){
    // sweetAlert(
    //   'Oops...',
    //   'Something went wrong!',
    //   'error'
    // );
  },methods: {
    login: function(){

      this.$http.post("http://localhost:8000/v1/login", this.user).then((res)=>{
        console.log("res"+res.body);
        if (res.body.success === true) {
          this.$router.push("/home")
          this.username = ""
          this.password = ""
        }else if(res.body.success === false) {
          // sweetAlert(
          //   'Oops...',
          //   'Usuario o contraseña incorrectos',
          //   'error'
          // )
          this.user.username = "";
          this.user.password = "";
        }
      });


    }
  }
}
</script>

<style lang="css">
img{
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
}
body {
	background: #eee !important;
}

.wrapper {
	margin-top: 80px;
  margin-bottom: 80px;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1);

  .form-signin-heading,
	.checkbox {
	  margin-bottom: 30px;
	}

	.checkbox {
	  font-weight: normal;
	}

	.form-control {
	  position: relative;
	  font-size: 16px;
	  height: auto;
	  padding: 10px;
		@include box-sizing(border-box);

		&:focus {
		  z-index: 2;
		}
	}

	input[type="text"] {
	  margin-bottom: -1px;
	  border-bottom-left-radius: 0;
	  border-bottom-right-radius: 0;
	}

	input[type="password"] {
	  margin-bottom: 20px;
	  border-top-left-radius: 0;
	  border-top-right-radius: 0;
	}
}


</style>
