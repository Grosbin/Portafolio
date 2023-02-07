const vent = document.getElementById("ventanita");

const animation = bodymovin.loadAnimation({
  container: vent, // Required
  path: "ventana.json", // Required
  renderer: "svg", // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
});
