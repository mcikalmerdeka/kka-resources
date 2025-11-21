"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js';

export function GlassDonut() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Cleanup existing children
    while(container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF8FAFC); 
    scene.fog = new THREE.Fog(0xF8FAFC, 10, 25);

    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 14);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Lighting
    const dirLight = new THREE.DirectionalLight(0xffffff, 3.0);
    dirLight.position.set(-5, 5, 5);
    scene.add(dirLight);

    const backLight = new THREE.SpotLight(0x3b82f6, 10.0);
    backLight.position.set(5, 5, -5);
    backLight.lookAt(0,0,0);
    scene.add(backLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Environment Map
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    new HDRLoader()
      .setPath('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/')
      .load('aircraft_workshop_01_1k.hdr', 
        function (texture) {
          const envMap = pmremGenerator.fromEquirectangular(texture).texture;
          scene.environment = envMap;
          texture.dispose();
          pmremGenerator.dispose();
        },
        undefined,
        function (err) {
          console.error("Failed to load HDR", err);
          // Fallback: just use lights, maybe increase metalness/roughness to show *something*
        }
      );

    // Geometry
    const geometry = new THREE.TorusGeometry(3.0, 1.2, 64, 128); 
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.05,  
      metalness: 0.1,
      transmission: 0.95, // Slightly less transparent to ensure visibility
      thickness: 3.5,
      ior: 1.5,
      attenuationColor: new THREE.Color(0x2563eb), 
      attenuationDistance: 4.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      side: THREE.DoubleSide
    });

    const donut = new THREE.Mesh(geometry, material);
    donut.position.set(3.5, 0, 0);
    scene.add(donut);

    // Animation Loop
    const clock = new THREE.Clock();
    let animationId: number;

    function animate() {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      
      // Rotation
      donut.rotation.x = time * 0.1;
      donut.rotation.y = time * 0.15;

      // "Gel" Wobble (Scale)
      const scale = 1 + Math.sin(time * 2) * 0.02;
      donut.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    }

    // Resize
    function onWindowResize() {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      
      if(width < 1024) {
        donut.position.set(0, 0.5, -2);
        donut.scale.set(0.6, 0.6, 0.6);
      } else {
        donut.position.set(3.5, 0, 0);
        donut.scale.set(0.85, 0.85, 0.85);
      }
    }

    window.addEventListener('resize', onWindowResize);
    onWindowResize(); // Initial sizing
    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      cancelAnimationFrame(animationId);
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 0 }} />;
}
