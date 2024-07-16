"use client";

import { useForm } from "react-hook-form";
import Input from "./Input";
import { sendEmail } from "@/app/_lib/actions";
import toast from "react-hot-toast";
import { useTransition } from "react";

function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const sumitContactForm = async (data) => {
    try {
      await sendEmail(data);
      toast.success("Email sent");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onSubmit = (data) => {
    startTransition(() => sumitContactForm(data));
  };

  const input =
    "w-full border border-solid py-3 px-2 my-2 disabled:bg-gray-100 dark:disabled:bg-slate-200 font-sans text-sm rounded-lg";

  return (
    <div className="md:order-2 md:w-[50%]">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4">
        <div className="flex gap-5">
          <Input label="First Name" error={errors?.firstName?.message}>
            <input
              type="text"
              className={`${input} ${
                errors?.firstName?.message
                  ? " border-red-500 outline-red-500 dark:border-stone-400"
                  : "border-stone-400 outline-[#27bcec]"
              }`}
              name="firstName"
              disabled={isPending}
              {...register("firstName", {
                required: "This field is required",
              })}
            />
          </Input>
          <Input label="Last Name" error={errors?.lastName?.message}>
            <input
              type="text"
              name="lastName"
              className={`${input} ${
                errors?.lastName?.message
                  ? " border-red-500 outline-red-500 dark:border-stone-400"
                  : "border-stone-400 outline-[#27bcec]"
              }`}
              disabled={isPending}
              {...register("lastName", {
                required: "This field is required",
              })}
            />
          </Input>
        </div>
        <Input label="Email" error={errors?.email?.message}>
          <input
            type="email"
            className={`${input} ${
              errors?.email?.message
                ? " border-red-500 outline-red-500 dark:border-stone-400"
                : "border-stone-400 outline-[#27bcec]"
            }`}
            name="email"
            disabled={isPending}
            {...register("email", {
              required: "This field is required",
            })}
          />
        </Input>
        <Input label="Subject" error={errors?.subject?.message}>
          <input
            type="text"
            className={`${input} ${
              errors?.subject?.message
                ? " border-red-500 outline-red-500 dark:border-stone-400"
                : "border-stone-400 outline-[#27bcec]"
            }`}
            name="subject"
            disabled={isPending}
            {...register("subject", {
              required: "This field is required",
            })}
          />
        </Input>
        <Input label="message" error={errors?.message?.message}>
          <textarea
            className={`${input} ${
              errors?.message?.message
                ? " border-red-500 outline-red-500 dark:border-stone-400"
                : "border-stone-400 outline-[#27bcec]"
            }`}
            name="message"
            disabled={isPending}
            cols="30"
            rows="4"
            {...register("message", {
              required: "This field is required",
            })}
          />
        </Input>

        <button className="justify-self-start rounded-lg bg-primary px-8 py-3 text-sm font-medium uppercase text-white disabled:cursor-not-allowed disabled:bg-primary/70">
          {!isPending ? "Send" : "Submitting"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
