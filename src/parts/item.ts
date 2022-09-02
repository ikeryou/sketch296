import vt from '../glsl/base.vert';
import fg from '../glsl/item.frag';
import { MyObject3D } from "../webgl/myObject3D";
import { Mesh } from 'three/src/objects/Mesh';
import { Util } from "../libs/util";
import { DoubleSide } from 'three/src/constants';
import { ShaderMaterial } from 'three/src/materials/ShaderMaterial';
import { Color } from 'three/src/math/Color';
import { Vector2 } from 'three/src/math/Vector2';
import { Conf } from '../core/conf';


export class Item extends MyObject3D {

  private _mesh:Mesh;
  private _r:Array<number> = [0,0,0,0,0,0,0,0,0,0,0];
  private _col:Color;

  constructor(opt:any = {}) {
    super()

    this._col = Util.instance.randomArr(Conf.instance.COLOR).clone();

    this._mesh = new Mesh(
      opt.geo,
      new ShaderMaterial({
        vertexShader:vt,
        fragmentShader:fg,
        transparent:true,
        side:DoubleSide,
        uniforms:{
          color:{value:this._col},
          edgeColor:{value:this._col},
          // 数追加は手動
          rate0:{value:0},
          rate1:{value:0},
          rate2:{value:0},
          rate3:{value:0},
          rate4:{value:0},
          rate5:{value:0},
          rate6:{value:0},
          rate7:{value:0},
          rate8:{value:0},
          rate9:{value:0},
          center0:{value:new Vector2()},
          center1:{value:new Vector2()},
          center2:{value:new Vector2()},
          center3:{value:new Vector2()},
          center4:{value:new Vector2()},
          center5:{value:new Vector2()},
          center6:{value:new Vector2()},
          center7:{value:new Vector2()},
          center8:{value:new Vector2()},
          center9:{value:new Vector2()},
        }
      })
    );
    this.add(this._mesh);
  }


  public getColor():Color {
    return this._col;
  }


  public setEdgeColor(col:Color):void {
    this._getUni(this._mesh).edgeColor.value = col;
  }


  public setSize(w:number, h:number):void {
    this.scale.set(w, h, 1);
  }


  public setCenter(c:Vector2, tgCenterKey:number):void {
    const uni = this._getUni(this._mesh);
    uni['center' + tgCenterKey].value = c;
  }


  public setRadius(r:number, tgCenterKey:number):void {
    this._r[tgCenterKey] += (r - this._r[tgCenterKey]) * 0.2;

    const uni = this._getUni(this._mesh);
    uni['rate' + tgCenterKey].value = this._r[tgCenterKey];
  }


  protected _update():void {
    super._update();
  }


  protected _resize(): void {
    super._resize();
  }
}