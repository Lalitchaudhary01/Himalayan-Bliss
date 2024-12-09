// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import {
//   TextField,
//   Button,
//   FormControlLabel,
//   Checkbox,
//   Radio,
//   RadioGroup,
//   FormLabel,
//   FormControl,
//   Select,
//   MenuItem,
//   Box,
// } from "@mui/material";

// const GoogleFormClone = () => {
//   // Formik for form handling
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       favoriteActivity: "",
//       agreeToTerms: false,
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required("Name is required"),
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required"),
//       favoriteActivity: Yup.string().required("Please select an activity"),
//       agreeToTerms: Yup.boolean().oneOf([true], "You must accept the terms"),
//     }),
//     onSubmit: (values) => {
//       console.log("Form Data:", values);
//       alert("Form submitted successfully!");
//     },
//   });

//   return (
//     <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
//       <form onSubmit={formik.handleSubmit}>
//         <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
//           React Google Form Clone
//         </h1>

//         {/* Name Field */}
//         <TextField
//           fullWidth
//           label="Your Name"
//           name="name"
//           value={formik.values.name}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.name && Boolean(formik.errors.name)}
//           helperText={formik.touched.name && formik.errors.name}
//           sx={{ mb: 3 }}
//         />

//         {/* Email Field */}
//         <TextField
//           fullWidth
//           label="Email Address"
//           name="email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.email && Boolean(formik.errors.email)}
//           helperText={formik.touched.email && formik.errors.email}
//           sx={{ mb: 3 }}
//         />

//         {/* Radio Button Group */}
//         <FormControl fullWidth sx={{ mb: 3 }}>
//           <FormLabel>Favorite Activity</FormLabel>
//           <RadioGroup
//             name="favoriteActivity"
//             value={formik.values.favoriteActivity}
//             onChange={formik.handleChange}
//           >
//             <FormControlLabel
//               value="hiking"
//               control={<Radio />}
//               label="Hiking"
//             />
//             <FormControlLabel
//               value="camping"
//               control={<Radio />}
//               label="Camping"
//             />
//             <FormControlLabel
//               value="fishing"
//               control={<Radio />}
//               label="Fishing"
//             />
//           </RadioGroup>
//         </FormControl>

//         {/* Terms and Conditions */}
//         <FormControlLabel
//           control={
//             <Checkbox
//               name="agreeToTerms"
//               checked={formik.values.agreeToTerms}
//               onChange={formik.handleChange}
//             />
//           }
//           label="I agree to the terms and conditions"
//           sx={{ mb: 3 }}
//         />

//         {/* Submit Button */}
//         <Button variant="contained" color="primary" type="submit" fullWidth>
//           Submit
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default GoogleFormClone;
