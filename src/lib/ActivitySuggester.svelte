<script lang="ts">
  let suggestion: string = "";
  import { tick } from "svelte";
  import { base } from "$app/paths";

  // Liste des activités par catégorie
  const activities = {
    chill: [
      "Lire un article ou un blog ",
      "Faire un peu d’aquarelle ",
      "Écouter un album entier sans rien faire ",
      "Regarder un film de la watchlist ",
      "Regarder un vrai nanar ",
      "Lire mon livre en cours ",
      "lire une BD ",
      "Jouer à un jeu vidéo ",
    ],
    active: [
      "Jouer un riff de basse funky ",
      "Jouer un morceau de guitare ",
      "Monter un bout de maquette ",
      "Faire du rangement ",
      "Faire une session de sport ",
    ],
    cerebral: [
      "Coder un mini projet rapide ",
      "Faire un live coding Sonic Pi ",
      "Lire les actu internationales ",
      "Écrire un article sur un sujet qui me passionne ",
      "Faire un peu de veille techno ",
    ],
  };

  async function suggestActivity(mood: "chill" | "active" | "cerebral") {
    const options = activities[mood];
    suggestion = "";
    await tick();
    suggestion = options[Math.floor(Math.random() * options.length)];
  }
</script>

<div class="app-window">
  <div class="app-header">
    Indecision App
    <div class="window-controls">
      <div class="control-dot close"></div>
      <div class="control-dot minimize"></div>
      <div class="control-dot maximize"></div>
    </div>
  </div>

  <div class="app-content">
    <img
      src="{base}/flower.gif"
      alt="Fleur animée"
      style="width: 100px; height: 100px;"
    />
    <h1>Choisis ton activité</h1>

    <div class="buttons-container">
      <button on:click={() => suggestActivity("chill")}>Chill 🛋️</button>
      <button on:click={() => suggestActivity("active")}>Active 🏃‍♂️</button>
      <button on:click={() => suggestActivity("cerebral")}>Cérébral 🧠</button>
    </div>

    <div class="suggestion-container">
      {#if suggestion}
        <p class="suggestion">💡 {suggestion}</p>
      {/if}
    </div>
  </div>
</div>

<style>
  /* 🌸 Style général */
  :global(body) {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #ffc107, #ff6f00);
    font-family: "Poppins", sans-serif;
  }

  .app-window {
    width: 350px;
    height: 500px;
    background: #eedfd6;
    border: 4px solid #ff9800;
    border-radius: 12px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .app-window::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at top left,
      rgba(255, 255, 255, 0.3),
      transparent 70%
    );
    pointer-events: none;
  }

  .app-header {
    background: #ff9800;
    color: white;
    font-weight: bold;
    padding: 8px;
    text-align: center;
    font-size: 1rem;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .window-controls {
    display: flex;
    gap: 8px;
  }

  .control-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: red;
    cursor: pointer;
  }

  .control-dot.minimize {
    background: yellow;
  }
  .control-dot.maximize {
    background: green;
  }

  .app-content {
    flex-grow: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .buttons-container {
    display: flex;
    gap: 8px;
    margin-top: 15px;
  }
  h1 {
    font-family: "Chicle";
    font-size: 2rem;
    color: #ff6f00;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 10px;
  }
  button {
    background: #ff80ab;
    border: none;
    padding: 10px 15px;
    font-size: 1rem;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }

  button:hover {
    background: #ffc107;
    color: white;
    transform: scale(1.1);
  }

  @keyframes buttonPress {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }

  button:active {
    animation: buttonPress 0.2s ease-in-out;
  }

  @keyframes glow {
    0% {
      text-shadow: 0px 0px 5px rgba(255, 183, 77, 0.3);
    }
    100% {
      text-shadow: 0px 0px 15px rgba(255, 183, 77, 0.6);
    }
  }

  .suggestion-container {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .suggestion {
    font-size: 1.4rem;
    font-weight: lighter;
    font-family: "Chicle", cursive;
    text-align: center;
    word-wrap: break-word;
    max-width: 90%;
    animation: glow 1s alternate infinite ease-in-out;
    color: #667d9d;
  }
  @keyframes pop {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes appOpen {
    0% {
      transform: translateY(-30px) scale(0.9);
      opacity: 0;
    }
    100% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }

  .app-window {
    animation: appOpen 0.6s ease-out;
  }
</style>
