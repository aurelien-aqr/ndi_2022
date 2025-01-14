import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';



			const scene = new THREE.Scene();
            scene.background = new THREE.Color(0x00000);

			const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10000 );
            const renderer = new THREE.WebGLRenderer();


			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

            camera.position.set( 75, 75, 150 );
            camera.lookAt( 0, 0, 0 );

            var controling = new OrbitControls(camera, renderer.domElement);
            
        
            
            const forme = new THREE.SphereGeometry(20,20,60,60,20,0,3);
            const couleur = new THREE.MeshBasicMaterial( {color : 0xf13812} );
            const VIH = new THREE.Mesh(forme,couleur);
            scene.add(VIH);
            VIH.position.set(0,50,0);

            const forme2 = new THREE.SphereGeometry(20,20,60,60,20,0,4);
            const couleur2 = new THREE.MeshBasicMaterial( {color : 0xDF16BE} );
            const PapillomaVirus = new THREE.Mesh(forme2,couleur2);
            scene.add(PapillomaVirus);
            PapillomaVirus.position.set(50,0,0);

            const forme3 = new THREE.SphereGeometry(20,20,60,60,10,0,3);
            const couleur3 = new THREE.MeshBasicMaterial( {color : 0xeb607f} );
            const Herpes = new THREE.Mesh(forme3,couleur3);
            scene.add(Herpes);
            Herpes.position.set(-50,0,0);

            const forme4 = new THREE.CylinderGeometry(10,10,20,30,30);
            const couleur4 = new THREE.MeshBasicMaterial( {color : 0xffd980} );
            const Syphillis = new THREE.Mesh(forme4,couleur4);
            scene.add(Syphillis);
            Syphillis.position.set(0,0,50);

            const forme5 = new THREE.SphereGeometry(20,20,2);
            const couleur5 = new THREE.MeshBasicMaterial( {color : 0x735a57} );
            const Morpion = new THREE.Mesh(forme5,couleur5);
            scene.add(Morpion);
            Morpion.position.set(0,0,-50);

            
            const plan = new THREE.BoxGeometry(1000,1,1000);
            const coulPlan = new THREE.MeshBasicMaterial({color : 0xffffff});
            const objPlan = new THREE.Mesh(plan,coulPlan);
            objPlan.position.set(0,-100,0);
            scene.add(objPlan);



            var lumiere2 = new THREE.Light(0x404040);
            scene.add(lumiere2);


			function animate() {
				requestAnimationFrame( animate );

        
                VIH.rotation.y += 0.05;
                VIH.rotation.z += 0.1;

                PapillomaVirus.rotation.y += 0.01;
                PapillomaVirus.rotation.x += 0.001;

                Herpes.rotation.y += 0.03;
                Herpes.rotation.x += 0.001;

                Syphillis.rotation.y += 0.08;
                Syphillis.rotation.x += 0.01;

                for(var int = 0; int< 100;int++) {
                    Morpion.rotation.z += 0.1;
                }
                for(var int2 = 0; int2< 100;int2++) {
                    Morpion.rotation.z -= 0.1;
                }

           
				renderer.render( scene, camera );
			};

			animate();

            var boutonZ = document.getElementById('z');
            var boutonQ = document.getElementById('q');
            var boutonS = document.getElementById('s');
            var boutonD = document.getElementById('d');

            var boutonOn;

            document.addEventListener('keydown' , 
            
            function(e) {
                boutonOn = e.key;

                if(boutonOn == "z") {
                    camera.position.y += 0.5;
                }

                if(boutonOn == "q") {
                    camera.position.x -= 0.5;
                }

                if(boutonOn == "s") {
                    camera.position.y -= 0.5;
                }

                if(boutonOn == "d") {
                    camera.position.x += 0.5;
                }
                
            }
            );