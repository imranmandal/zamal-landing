import Layout from "@/components/Layout";
import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Layout title="Contact us">
        <div className="min-h-full w-full py-10 px-20 grid grid-cols-2">
          <div>
            <div className="mb-1">
              <h1 className="text-5xl mb-1">Contact Us</h1>
              <p className="text-lg">
                Subscribe to get notified whenever we upload new design.
              </p>
            </div>
            <form
              className="flex flex-col"
              autoComplete="new-off"
              onSubmit={handleSubmit}
            >
              <label
                className="pb-3 pt-5 text-primary font-semibold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="border-2 border-primary rounded-xl p-2 outline-none"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="new-off"
              />
              <label
                className="pb-3 pt-5 text-primary font-semibold"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="border-2 border-primary rounded-xl p-2 outline-none resize-none"
                name="message"
                id="message"
                cols="30"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <input
                className="bg-primary px-6 py-3 mt-5 cursor-pointer rounded-xl font-bold text-primary"
                type="submit"
                value="Subscribe"
              />
            </form>
          </div>
          <div className="flex">
            <img
              className="m-auto"
              src="/assets/contactus.png"
              alt="contactus"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
