import { MyObject3D } from "../webgl/myObject3D";
import { Mesh } from 'three/src/objects/Mesh';
import { Util } from "../libs/util";
import { DoubleSide } from 'three/src/constants';
import { MeshToonMaterial } from 'three/src/materials/MeshToonMaterial';
import { HSL } from "../libs/hsl";
import { SphereGeometry } from 'three/src/geometries/SphereGeometry';
import { Vector2 } from 'three/src/math/Vector2';

export class itemScroll extends MyObject3D {

  private _mesh:Mesh;

  private _tgCenter:Vector2 = new Vector2();
  get tgCenter(): Vector2 {
    return this._tgCenter;
  }

  private _radius:number = 1;
  get radius(): number {
    return this._radius;
  }

  constructor(opt:any) {
    super()

    this._radius = Util.instance.random(0.5, 0.75);

    this._tgCenter.x = Util.instance.random(0, 1);
    this._tgCenter.y = Util.instance.random(0, 1);

    let col = opt.col;
    const hsl = new HSL();
    col.getHSL(hsl);
    hsl.l *= 1.5;
    col = col.setHSL(hsl.h, hsl.s, hsl.l);

    const geo = new SphereGeometry(0.5, 32, 32);
    this._mesh = new Mesh(
      geo,
      new MeshToonMaterial({
        color: col,
        gradientMap:null,
        transparent:true,
        side:DoubleSide,
        depthTest:true,
      })
    );
    this.add(this._mesh);
  }


  public setSize(size:number):void {
    this.scale.set(size, size, size);
  }


  protected _update():void {
    super._update();
  }


  protected _resize(): void {
    super._resize();
  }
}