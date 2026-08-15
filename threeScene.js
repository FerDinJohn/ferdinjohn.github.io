/**
 * Subtle 3D Ambient Particle Constellation for FerDin John Portfolio
 * Clean, lightweight, and elegant WebGL background that reacts gently to mouse movement.
 */

(function () {
    window.Portfolio3D = {
        scene: null,
        camera: null,
        renderer: null,
        particles: null,
        mouseX: 0,
        mouseY: 0,
        targetX: 0,
        targetY: 0,

        init: function (containerId) {
            const container = document.getElementById(containerId);
            if (!container || !window.THREE) return;

            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }

            const width = container.clientWidth || window.innerWidth;
            const height = container.clientHeight || window.innerHeight;

            const scene = new THREE.Scene();
            this.scene = scene;

            const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
            camera.position.z = 400;
            this.camera = camera;

            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);
            this.renderer = renderer;

            // Minimalist Floating Particles
            const particleCount = 450;
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3);
            const colors = new Float32Array(particleCount * 3);

            const colorCyan = new THREE.Color('#00eeff');
            const colorSoftBlue = new THREE.Color('#38bdf8');

            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;
                positions[i3] = (Math.random() - 0.5) * 1200;
                positions[i3 + 1] = (Math.random() - 0.5) * 1200;
                positions[i3 + 2] = (Math.random() - 0.5) * 800;

                const mix = Math.random();
                const col = colorCyan.clone().lerp(colorSoftBlue, mix);
                colors[i3] = col.r;
                colors[i3 + 1] = col.g;
                colors[i3 + 2] = col.b;
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

            const material = new THREE.PointsMaterial({
                size: 3,
                vertexColors: true,
                transparent: true,
                opacity: 0.6,
                blending: THREE.AdditiveBlending
            });

            const particles = new THREE.Points(geometry, material);
            scene.add(particles);
            this.particles = particles;

            // Mouse Move
            window.addEventListener('mousemove', (e) => {
                this.targetX = (e.clientX - window.innerWidth / 2) * 0.2;
                this.targetY = (e.clientY - window.innerHeight / 2) * 0.2;
            }, { passive: true });

            // Resize
            window.addEventListener('resize', () => {
                if (!renderer || !camera) return;
                const w = window.innerWidth;
                const h = window.innerHeight;
                camera.aspect = w / h;
                camera.updateProjectionMatrix();
                renderer.setSize(w, h);
            });

            // Gentle Animation Loop
            const animate = () => {
                requestAnimationFrame(animate);

                this.mouseX += (this.targetX - this.mouseX) * 0.05;
                this.mouseY += (this.targetY - this.mouseY) * 0.05;

                if (particles) {
                    particles.rotation.y += 0.0008;
                    particles.rotation.x += 0.0004;
                    particles.position.x = this.mouseX * 0.3;
                    particles.position.y = -this.mouseY * 0.3;
                }

                renderer.render(scene, camera);
            };

            animate();
        }
    };
})();
