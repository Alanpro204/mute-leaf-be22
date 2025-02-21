export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "Raul castro wearing a tanga is fighting vs Fidel Castro with a darth vader suit",
    };

    const response = await env.AI.run(
      "@cf/stabilityai/stable-diffusion-xl-base-1.0",
      inputs,
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
} satisfies ExportedHandler<Env>;
