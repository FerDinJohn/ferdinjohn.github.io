/**
 * Seamless Interactive 3D Ambient WebGL Background for FerDin John Portfolio
 * Clean, modern particle constellation that reacts to mouse & scroll.
 */

(function () {
    window.Portfolio3D = {
        scene: null,
        camera: null,
        renderer: null,
        nodePoints: null,
        linesMesh: null,
        dustParticles: null,
        mouseX: 0,
        mouseY: 0,
        targetX: 0,
        targetY: 0,
        scrollY: 0,
        targetScrollY: 0,

        init: function (containerId) {
            try {
                const container = document.getElementById(containerId);
                if (!container || !window.THREE) return;

                while (container.firstChild) {
                    container.removeChild(container.firstChild);
                }

                const width = window.innerWidth;
                const height = window.innerHeight;

                const scene = new THREE.Scene();
                this.scene = scene;

                const camera = new THREE.PerspectiveCamera(55, width / height, 1, 2000);
                camera.position.z = 500;
                this.camera = camera;

                const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
                renderer.setSize(width, height);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                renderer.setClearColor(0x000000, 0);
                container.appendChild(renderer.domElement);
                this.renderer = renderer;

                const colorCyan = new THREE.Color('#00eeff');
                const colorBlue = new THREE.Color('#38bdf8');
                const colorPurple = new THREE.Color('#818cf8');
                const colorViolet = new THREE.Color('#a855f7');

                // 1. Constellation Nodes
                const nodeCount = 80;
                const maxDistance = 110;
                const bounds = { x: 750, y: 550, z: 350 };
                const nodePositions = [];
                const nodeVelocities = [];

                for (let i = 0; i < nodeCount; i++) {
                    nodePositions.push(new THREE.Vector3(
                        (Math.random() - 0.5) * bounds.x,
                        (Math.random() - 0.5) * bounds.y,
                        (Math.random() - 0.5) * bounds.z
                    ));

                    nodeVelocities.push(new THREE.Vector3(
                        (Math.random() - 0.5) * 0.3,
                        (Math.random() - 0.5) * 0.3,
                        (Math.random() - 0.5) * 0.15
                    ));
                }

                const nodeGeometry = new THREE.BufferGeometry();
                const nodePosArray = new Float32Array(nodeCount * 3);
                const nodeColArray = new Float32Array(nodeCount * 3);

                for (let i = 0; i < nodeCount; i++) {
                    nodePosArray[i * 3] = nodePositions[i].x;
                    nodePosArray[i * 3 + 1] = nodePositions[i].y;
                    nodePosArray[i * 3 + 2] = nodePositions[i].z;

                    const mix = Math.random();
                    const col = mix < 0.4 ? colorCyan : mix < 0.75 ? colorBlue : colorPurple;
                    nodeColArray[i * 3] = col.r;
                    nodeColArray[i * 3 + 1] = col.g;
                    nodeColArray[i * 3 + 2] = col.b;
                }

                nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePosArray, 3));
                nodeGeometry.setAttribute('color', new THREE.BufferAttribute(nodeColArray, 3));

                const nodeMaterial = new THREE.PointsMaterial({
                    size: 4,
                    vertexColors: true,
                    transparent: true,
                    opacity: 0.85,
                    blending: THREE.AdditiveBlending
                });

                const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
                scene.add(nodePoints);
                this.nodePoints = nodePoints;

                // 2. Constellation Lines
                const maxLines = (nodeCount * (nodeCount - 1)) / 2;
                const linePositions = new Float32Array(maxLines * 6);
                const lineColors = new Float32Array(maxLines * 6);

                const lineGeometry = new THREE.BufferGeometry();
                lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
                lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

                const lineMaterial = new THREE.LineBasicMaterial({
                    vertexColors: true,
                    transparent: true,
                    opacity: 0.3,
                    blending: THREE.AdditiveBlending
                });

                const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
                scene.add(linesMesh);
                this.linesMesh = linesMesh;

                // 3. Floating Dust Field
                const dustCount = 300;
                const dustGeometry = new THREE.BufferGeometry();
                const dustPositions = new Float32Array(dustCount * 3);
                const dustColors = new Float32Array(dustCount * 3);

                for (let i = 0; i < dustCount; i++) {
                    const i3 = i * 3;
                    dustPositions[i3] = (Math.random() - 0.5) * 1400;
                    dustPositions[i3 + 1] = (Math.random() - 0.5) * 1400;
                    dustPositions[i3 + 2] = (Math.random() - 0.5) * 900;

                    const mix = Math.random();
                    const col = mix < 0.4 ? colorCyan : mix < 0.7 ? colorBlue : colorViolet;
                    dustColors[i3] = col.r;
                    dustColors[i3 + 1] = col.g;
                    dustColors[i3 + 2] = col.b;
                }

                dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
                dustGeometry.setAttribute('color', new THREE.BufferAttribute(dustColors, 3));

                const dustMaterial = new THREE.PointsMaterial({
                    size: 2,
                    vertexColors: true,
                    transparent: true,
                    opacity: 0.5,
                    blending: THREE.AdditiveBlending
                });

                const dustParticles = new THREE.Points(dustGeometry, dustMaterial);
                scene.add(dustParticles);
                this.dustParticles = dustParticles;

                // Listeners
                window.addEventListener('mousemove', (e) => {
                    this.targetX = (e.clientX - window.innerWidth / 2) * 0.15;
                    this.targetY = (e.clientY - window.innerHeight / 2) * 0.15;
                }, { passive: true });

                window.addEventListener('scroll', () => {
                    this.targetScrollY = window.scrollY * 0.15;
                }, { passive: true });

                window.addEventListener('resize', () => {
                    if (!renderer || !camera) return;
                    const w = window.innerWidth;
                    const h = window.innerHeight;
                    camera.aspect = w / h;
                    camera.updateProjectionMatrix();
                    renderer.setSize(w, h);
                });

                // Animation
                const animate = () => {
                    requestAnimationFrame(animate);

                    this.mouseX += (this.targetX - this.mouseX) * 0.05;
                    this.mouseY += (this.targetY - this.mouseY) * 0.05;
                    this.scrollY += (this.targetScrollY - this.scrollY) * 0.06;

                    const posAttr = nodePoints.geometry.attributes.position;
                    const posArr = posAttr.array;

                    let lineIndex = 0;
                    const linePosArr = linesMesh.geometry.attributes.position.array;
                    const lineColArr = linesMesh.geometry.attributes.color.array;

                    for (let i = 0; i < nodeCount; i++) {
                        const pos = nodePositions[i];
                        const vel = nodeVelocities[i];

                        pos.add(vel);

                        if (Math.abs(pos.x) > bounds.x / 2) vel.x *= -1;
                        if (Math.abs(pos.y) > bounds.y / 2) vel.y *= -1;
                        if (Math.abs(pos.z) > bounds.z / 2) vel.z *= -1;

                        posArr[i * 3] = pos.x;
                        posArr[i * 3 + 1] = pos.y;
                        posArr[i * 3 + 2] = pos.z;

                        for (let j = i + 1; j < nodeCount; j++) {
                            const pos2 = nodePositions[j];
                            const dx = pos.x - pos2.x;
                            const dy = pos.y - pos2.y;
                            const dz = pos.z - pos2.z;
                            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                            if (dist < maxDistance) {
                                const alpha = (1.0 - dist / maxDistance) * 0.4;

                                linePosArr[lineIndex * 6] = pos.x;
                                linePosArr[lineIndex * 6 + 1] = pos.y;
                                linePosArr[lineIndex * 6 + 2] = pos.z;

                                linePosArr[lineIndex * 6 + 3] = pos2.x;
                                linePosArr[lineIndex * 6 + 4] = pos2.y;
                                linePosArr[lineIndex * 6 + 5] = pos2.z;

                                lineColArr[lineIndex * 6] = 0.0;
                                lineColArr[lineIndex * 6 + 1] = 0.93 * alpha;
                                lineColArr[lineIndex * 6 + 2] = 1.0 * alpha;

                                lineColArr[lineIndex * 6 + 3] = 0.5 * alpha;
                                lineColArr[lineIndex * 6 + 4] = 0.55 * alpha;
                                lineColArr[lineIndex * 6 + 5] = 0.97 * alpha;

                                lineIndex++;
                            }
                        }
                    }

                    posAttr.needsUpdate = true;
                    linesMesh.geometry.attributes.position.needsUpdate = true;
                    linesMesh.geometry.attributes.color.needsUpdate = true;
                    linesMesh.geometry.setDrawRange(0, lineIndex * 2);

                    nodePoints.rotation.y += 0.0006;
                    nodePoints.rotation.x += 0.0003;
                    linesMesh.rotation.y += 0.0006;
                    linesMesh.rotation.x += 0.0003;

                    if (dustParticles) {
                        dustParticles.rotation.y += 0.0003;
                        dustParticles.rotation.x -= 0.00015;
                    }

                    camera.position.x = this.mouseX * 0.4;
                    camera.position.y = -this.mouseY * 0.4 - this.scrollY * 0.2;
                    camera.lookAt(0, -this.scrollY * 0.2, 0);

                    renderer.render(scene, camera);
                };

                animate();
            } catch (e) {
                console.warn('Portfolio3D init error:', e);
            }
        }
    };
})();
