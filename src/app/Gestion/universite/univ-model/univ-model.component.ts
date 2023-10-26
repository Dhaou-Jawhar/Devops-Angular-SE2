import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, Input, OnInit , Output, SimpleChange } from '@angular/core';
import { MeshStandardMaterial, Object3D, Mesh, PerspectiveCamera } from 'three';

@Component({
  selector: 'app-univ-model',
  templateUrl: './univ-model.component.html',
  styleUrls: ['./univ-model.component.scss']
})
export class UnivModelComponent implements OnInit {

  @Input() obj:string ='';

  set color(value: string) {
    this.#color = value;
    this.applyColorToMaterial(value);
  }

  #color = '';

  cup$ = this.gltfLoaderService.load('assets/3dModels/'+this.obj);

  cupMaterial: MeshStandardMaterial | undefined;

  constructor(private gltfLoaderService: NgtGLTFLoaderService) {}

  cupLoaded(object: Object3D) {
    this.cupMaterial = <MeshStandardMaterial>(<Mesh>object.getObjectByName('Object_2')).material;
    this.applyColorToMaterial(this.#color);
  }

  ngOnInit() {
    console.log('assets/3dModels/'+this.obj);
    this.cup$ = this.gltfLoaderService.load('assets/3dModels/'+this.obj);
  }

  controlsReady(controls: NgtSobaOrbitControls) {
    const orbitControls = controls.controls;
    orbitControls.enableZoom = true;
    orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = 10;
    const camera = orbitControls.object as PerspectiveCamera;
    camera.zoom = 2;
    camera.position.setY(4);
  }

  applyColorToMaterial(color: string) {
    if (this.cupMaterial) {
      this.cupMaterial.color.setHex(parseInt(color.substring(1), 16));
    }
  }

}
