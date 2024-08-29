function createGlobe() {
  const container = document.getElementById('globe-container');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);
  
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.rotateSpeed = 0.5;
  
  const textureLoader = new THREE.TextureLoader();
  const earthDayMapUrl = 'assets/images/world_map.jpg';
  
  const cities = [
    { name: 'Niamey', lat: 13.5137, lon: 2.1098 },
    { name: 'Ouagadougou', lat: 12.3714, lon: -1.5197 },
    { name: 'Dakar', lat: 14.7167, lon: -17.4677 }
  ];
  
  textureLoader.load(earthDayMapUrl, (texture) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = texture.image.width;
    canvas.height = texture.image.height;
    
    // Draw the original texture onto the canvas
    ctx.drawImage(texture.image, 0, 0);
    
    // Draw pins for each city
    cities.forEach(city => {
      const x = (city.lon + 180) * (canvas.width / 360);
      const y = (90 - city.lat) * (canvas.height / 180);
      
      ctx.fillStyle = '#FF6600';
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fill();
    });
    
    // Create a new texture from the modified canvas
    const newTexture = new THREE.Texture(canvas);
    newTexture.needsUpdate = true;
    
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ map: newTexture });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);
    
    camera.position.z = 15;
    
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      globe.rotation.y += 0.001;
      renderer.render(scene, camera);
    }
    animate();
  });
  
  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
}

document.addEventListener('DOMContentLoaded', createGlobe);