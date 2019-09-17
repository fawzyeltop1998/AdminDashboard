<template>
    <div class="loginForAdmin bg-white shadow rounded-lg">
          <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">

        <div class="special-image image-here hodhod-image lets-start-with-code w-100 mb-3">
          <div class="image mySpecial-now text-center w-100">
            <img class="shadow-lg rounded-circle " style="height: 80px; width: 80px;" src="../../public/images/img-01.png"/>
          </div>
        </div>

				<form class="login100-form validate-form">
					<span class="login100-form-title">
						Login as Admin
					</span>

          <p class="from-intention text-center" style='color: #888'>
            Login now, after login, you'll be able to control the Admin Dashboard
          </p>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" placeholder="Email">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="pass" placeholder="Password">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Login  <span style="padding-left: 5px"><i class="fas fa-sign-in-alt"></i></span>
						</button>
					</div>

	
				</form>
			</div>
		</div>
	</div>
        </div>

</template>
<script>
export default {};
</script>
<style>
</style>
