import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onUserRegister(userObj) {
    console.log(userObj);
  }

  console.log(errors);
  return (
    <div className="mt-5">
      <h1 className="text-center text-info">User Registration</h1>
      <form className="w-50 mx-auto" onSubmit={handleSubmit(onUserRegister)}>
        {/* username */}
        <input
          type="text"
          {...register("username", { required: true, minLength: 4, maxLength: 6 })}
          className="form-control mb-3"
          placeholder="Username"
        />
        {errors?.username?.type == "required" && <p className="text-danger">Username required</p>}
        {errors?.username?.type == "minLength" && <p className="text-danger">Min length should be 4</p>}
        {errors?.username?.type == "maxLength" && <p className="text-danger">Max length should beless than 6</p>}
        {/* email */}
        {/* email */}
        <input
          type="email"
          {...register("email", { required: true })}
          className="form-control mb-3"
          placeholder="Email"
        />
        {errors?.email?.type == "required" && <p className="text-danger">Email required</p>}
        {/* password */}
        <input
          type="password"
          {...register("password", { required: true })}
          className="form-control mb-3"
          placeholder="Password"
        />
        {errors?.password?.type == "required" && <p className="text-danger">Password required</p>}
        {/* submit button */}
        <button type="submit" className="btn btn-success">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;

//required
//minLength & maxLength
//min & max
//pattern
