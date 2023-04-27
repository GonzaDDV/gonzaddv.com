import EmailJS from "@emailjs/browser";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { CheckCircle, Send } from "react-feather";
import { useForm } from "react-hook-form";

import { EMAIL_REGEX } from "@/utils/constants";

import { ContactInput, WithLabel } from "./ContactInput";

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const { t } = useTranslation();

  const onSubmit = async (data: any) => {
    await EmailJS.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      data,
      process.env.NEXT_PUBLIC_EMAILJS_KEY
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex gap-4 w-full flex-wrap">
        <ContactInput
          label={t("contact.form.name")}
          id="name"
          register={register}
          options={{ required: true }}
          errors={errors}
        />
        <ContactInput
          label={t("contact.form.email")}
          id="email"
          register={register}
          options={{ required: true, pattern: EMAIL_REGEX }}
          errors={errors}
        />
      </div>

      <WithLabel label={t("contact.form.message")} htmlFor="message">
        <textarea
          id="message"
          className="border-black border-2 rounded-sm p-2 text-xl pb-1 resize-none h-40"
          {...register("message", { required: true })}
        />
      </WithLabel>

      <div className="flex gap-4 items-center">
        <button className="bg-black text-white text-2xl py-3 pb-2 rounded-sm px-5 self-start flex justify-center gap-3 transition-all group active:translate-y-1 focus:ring-2 focus:ring-offset-2 focus:ring-black">
          <Send className="mt-px transition-transform group-hover:translate-x-1 group-active:rotate-45" />
          <span>{t("contact.form.button")}</span>
        </button>

        {isSubmitSuccessful && (
          <motion.div
            initial={{ y: 30, scale: 0 }}
            animate={{ y: 0, scale: 1 }}
          >
            <CheckCircle size={30} className="text-green-600" />
          </motion.div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
