const { createApp } = Vue;

createApp({
  data() {
    return {
      coins: [
        { name: "bitcoin" },
        { name: "ethereum" },
        { name: "tether" },
        { name: "Perfect Money" },
        { name: "walmart" },
        { name: "itunes" },
        { name: "google play" },
        { name: "vanilla" },
        { name: "amazon" },
        { name: "ebay" },
        { name: "amex steam" },
        { name: "steam" },
      ],
    };
  },
}).mount("#app");
