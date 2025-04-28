function Signup() {
    return <div>Signip</div>;
}

export default Signup;

// // SignupForm.js
// import React, { useState } from "react";
// import axios from "axios";

// function Signup() {
//     const [formData, setFormData] = useState({
//         username: "",
//         email: "",
//         password: ""
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post(
//                 "http://127.0.0.1:3000/api/v1/users/signup",
//                 formData
//             );
//             alert("Signup successful!");
//         } catch (err) {
//             alert("Signup failed. " + (err.response?.data?.message || ""));
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 name="username"
//                 placeholder="Username"
//                 onChange={handleChange}
//                 required
//             />
//             <input
//                 name="email"
//                 type="email"
//                 placeholder="Email"
//                 onChange={handleChange}
//                 required
//             />
//             <input
//                 name="password"
//                 type="password"
//                 placeholder="Password"
//                 onChange={handleChange}
//                 required
//             />
//             <button type="submit">Sign Up</button>
//         </form>
//     );
// }

// export default Signup;
