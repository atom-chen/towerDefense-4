import { Cmn } from "../../frame/Cmn";
import { UIKeyEnum } from "../../frame/UIMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameNode extends cc.Component {
    @property(cc.Node)
    level :cc.Node =null;
    private _touchStartX:number =0;
    private _touchMoveX:number =0;
    private _tiledMap:cc.TiledMap =null;
    onEnable(){
        this.node.on(cc.Node.EventType.TOUCH_START,this.on_touch_start,this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE,this.on_touch_move,this);
        this._tiledMap =this.node.getComponent(cc.TiledMap);
    }
    start(){
        this.initLevel();
    }
    on_touch_start(event:cc.Event.EventTouch){

    }
    on_touch_move(event:cc.Event.EventTouch){
        event.isStopped();
        let x =this.node.x+event.getLocationX()-event.getPreviousLocation().x;
        if(x > 0 ||x <1280-1920){
            return
        }
        this.node.x = x;
        event.stopPropagation(); 
    }
    initLevel(){
        let objs = this._tiledMap.getObjectGroup('level').getObjects(); 
        let objNums = 0;
        let obj;
        let level:cc.Node=null;
        objs.forEach(element => {
            objNums++;
            level =cc.instantiate(this.level);
            this.node.addChild(level);
            level.setPosition(element.x,element.y);
            level.getChildByName('Label').getComponent(cc.Label).string = ''+objNums;
            level.getComponent('cc.Button').clickEvents[0].customEventData=objNums;
        });
    }
    // update (dt) {}
}
