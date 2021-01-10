<template>
  <div class="root"><div id="THREEContainer"></div></div>
</template>

<script>
import * as Three from "three";

export default {
  name: "Pet",
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
    };
  },
  methods: {
    init: async function() {
      let container = document.getElementById("THREEContainer");

      this.camera = new Three.PerspectiveCamera(
        70,
        container.clientWidth / container.clientHeight,
        0.01,
        10
      );
      this.camera.position.z = 1;

      this.scene = new Three.Scene();
      this.scene.background = new Three.Color("white");

      /*
      const loader = new Three.GLTFLoader();
      const chickData = await loader.loadAsync(
        "@/src/assets/Models/Chick.gltf"
      );
      this.chick = chickData.scene.children[0]; */
      //this.scene.add(chick);

      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
      let material = new Three.MeshNormalMaterial();

      this.mesh = new Three.Mesh(geometry, material);
      this.scene.add(this.mesh);

      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);
    },
    animate: function() {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      //this.chick.rotation.x += 0.01;
      this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
};
</script>

<style lang="scss">
#THREEContainer {
  width: 400px;
  height: 400px;
}
</style>
