export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "Raul castro wearing a tanga is fighting vs Fidel Castro with a darth vader suit",
    };

    const response = await env.AI.run(
      "@cf/runwayml/stable-diffusion-v1-5-img2img",
      inputs,
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
} satisfies ExportedHandler<Env>;
