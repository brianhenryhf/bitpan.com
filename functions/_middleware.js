import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

// middleware is magic name that captures all requests - mailchannelsPlugin will look for and handle
// forms submitted with `data-static-form-name` attrib.
export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Bitpan Info", email: "info@bitpan.com" }],
    },
  ],
  from: { name: "Online Bitpan.com Form", email: "info@bitpan.com" },
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/thank-you" },
    }),
});