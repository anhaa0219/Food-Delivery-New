import { StepOne } from "./_features/step-one";
import { StepTwo } from "./_features/step-two";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long" })
  .regex(/[a-z]/, {
    message: "Password must contain at least one lowercase letter",
  })
  .regex(/[A-Z]/, {
    message: "Password must contain at least one uppercase letter",
  })
  .regex(/[0-9]/, { message: "Password must contain at least one number" })
  .regex(/[^a-zA-Z0-9]/, {
    message: "Password must contain at least one special character",
  });
const emailSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email address." }),
});

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmitPassword = (e) => {
    e.preventDefault();
    const result = passwordSchema.safeParse(password);

    if (!result.success) {
      setError(result.error.errors[0].message);
    } else {
      setError("");
      alert("Password is valid!");
    }
  };
  const handleSubmitEmail = (e) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);

    if (!result.success) {
      setError(result.error.errors[0].message);
    } else {
      setError("");
      alert("Email is valid");
    }
  };
  return (
    <div className="w-full flex items-center justify-center">
      <StepOne functionNext={(e) => handleSubmitEmail(e)} />
      <StepTwo functionNext={(e) => handleSubmit(e)} />
    </div>
  );
}
